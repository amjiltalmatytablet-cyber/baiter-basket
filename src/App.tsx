/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, onSnapshot, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { Basket, Store, RecipeProposal } from './types';
import { TRANSLATIONS, MOCK_BASKETS, MOCK_STORES } from './constants';
import Navigation from './components/Navigation';
import Marketplace from './components/Marketplace';
import AdminDashboard from './components/AdminDashboard';
import RecipeModal from './components/RecipeModal';
import PurchaseModal from './components/PurchaseModal';
import { getRecipeSuggestion } from './services/geminiService';
import { auth, db, loginWithGoogle, logout } from './lib/firebase';
import { handleFirestoreError, OperationType } from './lib/errorHandler';
import { LogIn, LogOut } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'admin'>('marketplace');
  const [baskets, setBaskets] = useState<Basket[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeProposal | null>(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPurchaseSuccess, setShowPurchaseSuccess] = useState(false);

  // Auth State
  useEffect(() => {
    console.log("Setting up auth listener...");
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      console.log("Auth State Changed:", u ? `User: ${u.email}` : "No user");
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sync Baskets
  useEffect(() => {
    const q = query(collection(db, 'baskets'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const basketData = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Basket));
      setBaskets(basketData.length > 0 ? basketData : MOCK_BASKETS); // Fallback to mock for demo
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'baskets');
    });
    return unsubscribe;
  }, []);

  // Sync Stores
  useEffect(() => {
    const q = query(collection(db, 'stores'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const storeData = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Store));
      setStores(storeData.length > 0 ? storeData : MOCK_STORES); // Fallback to mock for demo
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'stores');
    });
    return unsubscribe;
  }, []);

  const handleToggleStock = async (id: string, inStock: boolean) => {
    try {
      await updateDoc(doc(db, 'baskets', id), { inStock: !inStock });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `baskets/${id}`);
    }
  };

  const handleGetRecipe = async (basket: Basket) => {
    setIsRecipeLoading(true);
    const suggestion = await getRecipeSuggestion(basket);
    setSelectedRecipe(suggestion);
    setIsRecipeLoading(false);
  };

  const handlePurchase = async (id: string) => {
    // In a real app, this would be a transaction in Firestore
    // For this demo, we'll update the local/remote state
    try {
      if (db) {
        // Try updating remote if it exists
        try {
          await updateDoc(doc(db, 'baskets', id), { inStock: false });
        } catch (e) {
          console.warn("Could not update Firestore, updating local state only:", e);
        }
      }
      
      setBaskets(prev => prev.map(b => b.id === id ? { ...b, inStock: false } : b));
      setShowPurchaseSuccess(true);
    } catch (error) {
      console.error("Purchase error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      console.log("Attempting login...");
      const u = await loginWithGoogle();
      if (u) {
        console.log("Login successful:", u.email);
        setUser(u);
      } else {
        console.warn("Login returned null user");
      }
    } catch (e) {
      console.error("Login component error:", e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary/20">
      <div className="fixed top-6 right-6 z-50">
        {user ? (
          <div className="flex items-center gap-3 bg-white p-2 pl-4 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-xs font-bold text-gray-500">{user.displayName || user.email}</span>
            <button 
              onClick={logout}
              className="p-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-black"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button 
            onClick={handleLogin}
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm font-bold text-sm hover:shadow-md transition-all active:scale-95"
          >
            <LogIn className="w-4 h-4" />
            <span>Кіру</span>
          </button>
        )}
      </div>

      <Navigation activeTab={activeTab} onChange={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'marketplace' ? (
            <motion.div
              key="marketplace"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <Marketplace 
                baskets={baskets} 
                stores={stores} 
                onGetRecipe={handleGetRecipe}
                onPurchase={handlePurchase}
              />
            </motion.div>
          ) : (
            <motion.div
              key="admin"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              {!user ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-3xl flex items-center justify-center mb-6">
                    <LogIn className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h2 className="serif text-3xl font-bold mb-4">Бөлімге кіру үшін авторизация қажет</h2>
                  <p className="text-gray-500 mb-8 max-w-sm">Дүкеніңізді басқару және инвентарьды өзгерту үшін жүйеге кіріңіз.</p>
                  <button 
                    onClick={handleLogin}
                    className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                  >
                    Google арқылы кіру
                  </button>
                </div>
              ) : (
                <AdminDashboard 
                  baskets={baskets} 
                  store={stores[0]} // For demo, assume first store
                  onToggleStock={(id) => {
                    const basket = baskets.find(b => b.id === id);
                    if (basket) handleToggleStock(id, basket.inStock);
                  }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <RecipeModal 
        recipe={selectedRecipe} 
        isLoading={isRecipeLoading} 
        onClose={() => setSelectedRecipe(null)} 
      />

      <PurchaseModal 
        isOpen={showPurchaseSuccess} 
        onClose={() => setShowPurchaseSuccess(false)} 
      />
    </div>
  );
}

