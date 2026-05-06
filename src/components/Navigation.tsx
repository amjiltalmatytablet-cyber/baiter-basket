/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Leaf, Store as StoreIcon, User } from "lucide-react";
import { TRANSLATIONS } from "../constants";

interface NavigationProps {
  activeTab: 'marketplace' | 'admin';
  onChange: (tab: 'marketplace' | 'admin') => void;
}

export default function Navigation({ activeTab, onChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-50 md:top-0 md:bottom-auto">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center gap-2 text-brand-primary">
          <Leaf className="w-6 h-6" />
          <span className="font-serif text-xl font-semibold">{TRANSLATIONS.appName}</span>
        </div>
        
        <div className="flex gap-8 mx-auto md:mx-0">
          <button
            onClick={() => onChange('marketplace')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === 'marketplace' ? 'text-brand-primary' : 'text-gray-400'
            }`}
          >
            <StoreIcon className="w-6 h-6" />
            <span className="text-xs font-medium">{TRANSLATIONS.marketplace}</span>
            {activeTab === 'marketplace' && (
              <motion.div
                layoutId="navIndicator"
                className="w-1 h-1 rounded-full bg-brand-primary mt-1"
              />
            )}
          </button>
          
          <button
            onClick={() => onChange('admin')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === 'admin' ? 'text-brand-primary' : 'text-gray-400'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">{TRANSLATIONS.myStore}</span>
            {activeTab === 'admin' && (
              <motion.div
                layoutId="navIndicator"
                className="w-1 h-1 rounded-full bg-brand-primary mt-1"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
