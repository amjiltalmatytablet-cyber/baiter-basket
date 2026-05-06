/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Store {
  id: string;
  name: string;
  address: string;
  closingTime: string; // ISO string or simple time like "20:00"
  imageUrl: string;
  rating: number;
  ownerId: string;
}

export interface Basket {
  id: string;
  storeId: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  ingredients: string[]; // List of potential ingredients in the "surprise bag"
  inStock: boolean;
  availableUntil: string;
  imageUrl?: string;
}

export interface RecipeProposal {
  title: string;
  description: string;
  instructions: string[];
}
