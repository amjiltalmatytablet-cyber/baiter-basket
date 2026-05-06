/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from "motion/react";
import { Clock, Tag, Wand2 } from "lucide-react";
import { Basket, Store } from "../types";
import { TRANSLATIONS } from "../constants";
import CountdownTimer from "./CountdownTimer";

interface BasketCardProps {
  basket: Basket;
  store?: Store;
  onGetRecipe: (basket: Basket) => void;
  onPurchase?: (id: string) => void;
  onToggleStock?: (id: string) => void;
  isAdmin?: boolean;
}

export const BasketCard: React.FC<BasketCardProps> = ({ basket, store, onGetRecipe, onPurchase, onToggleStock, isAdmin }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-md ${
        !basket.inStock ? 'opacity-60 grayscale' : ''
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={basket.imageUrl || store?.imageUrl || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"}
          alt={basket.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
           {!basket.inStock && (
            <span className="bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {TRANSLATIONS.soldOut}
            </span>
          )}
          {basket.inStock && (
            <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {TRANSLATIONS.inStock}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="serif text-2xl font-semibold leading-tight">{basket.title}</h3>
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">₸{basket.originalPrice}</p>
            <p className="text-xl font-bold text-brand-primary">₸{basket.discountPrice}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{basket.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {basket.ingredients.map((ing, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest font-semibold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
              {ing}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1.5 text-orange-600">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold font-mono">
              <CountdownTimer targetTime={basket.availableUntil} />
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Tag className="w-4 h-4" />
            <span className="text-xs font-medium">{store?.name || TRANSLATIONS.almaty}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          {isAdmin ? (
            <button
              onClick={() => onToggleStock?.(basket.id)}
              className="w-full bg-black text-white text-sm font-bold py-4 rounded-2xl transition-transform active:scale-95"
            >
              {TRANSLATIONS.toggleStock}
            </button>
          ) : (
            <>
              <button
                disabled={!basket.inStock}
                onClick={() => onPurchase?.(basket.id)}
                className="flex-[2] bg-brand-primary text-white text-sm font-bold py-4 rounded-2xl transition-transform active:scale-95 disabled:bg-gray-200 disabled:scale-100"
              >
                {TRANSLATIONS.buyNow}
              </button>
              <button
                onClick={() => onGetRecipe(basket)}
                className="flex-1 bg-white border border-gray-200 text-brand-primary flex items-center justify-center rounded-2xl hover:bg-gray-50 transition-transform active:scale-95"
                title={TRANSLATIONS.recipeIdeas}
              >
                <Wand2 className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BasketCard;
