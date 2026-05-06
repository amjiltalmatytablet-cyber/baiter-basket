/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Basket, Store } from "../types";
import { TRANSLATIONS } from "../constants";
import BasketCard from "./BasketCard";
import { LayoutDashboard } from "lucide-react";

interface AdminDashboardProps {
  baskets: Basket[];
  store: Store;
  onToggleStock: (id: string) => void;
}

export default function AdminDashboard({ baskets, store, onToggleStock }: AdminDashboardProps) {
  const storeBaskets = store ? baskets.filter(b => b.storeId === store.id) : baskets;

  return (
    <div className="pb-32 pt-6 px-4 max-w-4xl mx-auto md:pt-24">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-black text-white rounded-2xl">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <h1 className="serif text-4xl font-bold">{store?.name || "Менің дүкенім"}</h1>
            <p className="text-gray-400 text-sm">{store?.address || "Адрес көрсетілмеген"}</p>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-[2rem] p-8 mb-10 border border-gray-100 shadow-sm">
        <h2 className="serif text-2xl font-bold mb-6">Инвентарьды басқару</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storeBaskets.map((basket) => (
            <BasketCard
              key={basket.id}
              basket={basket}
              isAdmin={true}
              onToggleStock={onToggleStock}
              onGetRecipe={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
