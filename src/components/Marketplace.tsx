/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Basket, Store } from "../types";
import { TRANSLATIONS } from "../constants";
import BasketCard from "./BasketCard";
import { MapPin } from "lucide-react";

interface MarketplaceProps {
  baskets: Basket[];
  stores: Store[];
  onGetRecipe: (basket: Basket) => void;
  onPurchase: (id: string) => void;
}

export default function Marketplace({ baskets, stores, onGetRecipe, onPurchase }: MarketplaceProps) {
  return (
    <div className="pb-32 pt-6 px-4 max-w-4xl mx-auto md:pt-24">
      <header className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-2 md:justify-start">
          <MapPin className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-bold">{TRANSLATIONS.almaty}</span>
        </div>
        <h1 className="serif text-5xl font-bold mb-4">{TRANSLATIONS.availableBaskets}</h1>
        <p className="text-gray-500 max-w-lg">
          Сапалы тағамдарды тиімді бағамен сатып алып, қоршаған ортаны сақтауға үлес қосыңыз.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {baskets.map((basket) => (
          <BasketCard
            key={basket.id}
            basket={basket}
            store={stores.find(s => s.id === basket.storeId)}
            onGetRecipe={onGetRecipe}
            onPurchase={onPurchase}
          />
        ))}
      </div>
    </div>
  );
}
