/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ShoppingBag, X } from "lucide-react";
import { TRANSLATIONS } from "../constants";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden text-center p-10"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="serif text-3xl font-bold mb-4">{TRANSLATIONS.purchaseSuccess}</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {TRANSLATIONS.purchaseDetail}
            </p>
            
            <button
              onClick={onClose}
              className="w-full bg-black text-white font-bold py-5 rounded-2xl hover:scale-105 transition-transform active:scale-95"
            >
              {TRANSLATIONS.close}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
