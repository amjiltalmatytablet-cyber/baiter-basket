/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, ChefHat, CheckCircle2 } from "lucide-react";
import { RecipeProposal } from "../types";
import { TRANSLATIONS } from "../constants";

interface RecipeModalProps {
  recipe: RecipeProposal | null;
  onClose: () => void;
  isLoading: boolean;
}

export default function RecipeModal({ recipe, onClose, isLoading }: RecipeModalProps) {
  return (
    <AnimatePresence>
      {(recipe || isLoading) && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-primary/10 rounded-2xl">
                  <ChefHat className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="serif text-2xl font-bold">{TRANSLATIONS.recipeIdeas}</h2>
              </div>

              {isLoading ? (
                <div className="py-12 flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                  <p className="text-gray-500 font-medium">{TRANSLATIONS.loading}</p>
                </div>
              ) : recipe && (
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <h3 className="serif text-xl font-bold mb-2 text-brand-primary">{recipe.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{recipe.description}</p>
                  </div>

                  <div className="space-y-4">
                    {recipe.instructions.map((step, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
