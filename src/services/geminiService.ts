/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { Basket, RecipeProposal } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRecipeSuggestion(basket: Basket): Promise<RecipeProposal> {
  const prompt = `Менде келесі ингредиенттері бар "тосын сый себеті" бар: ${basket.ingredients.join(", ")}. 
Бұл ингредиенттерді пайдаланып жасауға болатын тез әрі шығармашылық рецепт ұсыныңыз. 
Жауапты қазақ тілінде, тек JSON форматында қайтарыңыз.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            instructions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "instructions"]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini recipe error:", error);
    return {
      title: "Жай рецепт",
      description: "Ингредиенттерді араластырып, қыздырып жеңіз.",
      instructions: ["Ингредиенттерді дайындаңыз", "Қыздырыңыз", "Дайын"]
    };
  }
}
