/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Basket, Store } from "./types";

export const TRANSLATIONS = {
  appName: "Baiterek Basket",
  marketplace: "Маркетплейс",
  myStore: "Менің дүкенім",
  availableBaskets: "Қолжетімді себеттер",
  soldOut: "Таусылды",
  inStock: "Бар",
  buyNow: "Сатып алу",
  purchaseSuccess: "Сатып алу сәтті аяқталды!",
  purchaseDetail: "Себет сізді дүкенде күтуде. Асығыңыз!",
  close: "Жабу",
  originalPrice: "Негізгі баға",
  discountPrice: "Жеңілдікпен",
  availableUntil: "Уақыты",
  recipeIdeas: "Рецепт идеялары",
  getRecipe: "Рецепт алу",
  loading: "Жүктелуде...",
  ingredients: "Құрамы",
  closingSoon: "Жуық арада жабылады",
  toggleStock: "Қолжетімділікті өзгерту",
  almaty: "Алматы",
  surpriseBag: "Тосын сый себеті"
};

export const MOCK_STORES: Store[] = [
  {
    id: "store-1",
    name: "Almaty Bakery",
    address: "Абай даңғылы, 44",
    closingTime: "21:00",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    ownerId: "demo-owner"
  },
  {
    id: "store-2",
    name: "Coffee & More",
    address: "Төле би көшесі, 12",
    closingTime: "20:30",
    imageUrl: "https://images.unsplash.com/photo-1501339817302-382d1d756f05?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    ownerId: "demo-owner"
  }
];

export const MOCK_BASKETS: Basket[] = [
  {
    id: "basket-1",
    storeId: "store-1",
    title: "Кешкі нан жиынтығы",
    description: "Жаңа піскен нан өнімдері мен круассандар.",
    originalPrice: 3500,
    discountPrice: 1200,
    ingredients: ["Круассан", "Багет", "Тәтті бөлке"],
    inStock: true,
    availableUntil: "21:00",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-2",
    storeId: "store-2",
    title: "Сэндвіч пен десерт",
    description: "Бүгінгі балғын сэндвичтер мен кекстер.",
    originalPrice: 4500,
    discountPrice: 1800,
    ingredients: ["Сэндвіч", "Кекс", "Салат"],
    inStock: true,
    availableUntil: "20:30",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-3",
    storeId: "store-1",
    title: "Пирогтар жиынтығы",
    description: "Алма мен жидек қосылған тәтті пирогтар.",
    originalPrice: 3000,
    discountPrice: 1000,
    ingredients: ["Алма пирогы", "Жидек торты"],
    inStock: true,
    availableUntil: "21:30",
    imageUrl: "https://images.unsplash.com/photo-1572382391624-99ad7d488f72?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-4",
    storeId: "store-2",
    title: "Таңғы ас қалдықтары",
    description: "Гранула мен табиғи йогурт жиынтығы.",
    originalPrice: 2500,
    discountPrice: 900,
    ingredients: ["Йогурт", "Гранула", "Жемістер"],
    inStock: true,
    availableUntil: "19:00",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-5",
    storeId: "store-1",
    title: "Еуропалық нан жинағы",
    description: "Чиабатта мен қара бидай наны.",
    originalPrice: 2800,
    discountPrice: 1100,
    ingredients: ["Чиабатта", "Бородино наны"],
    inStock: true,
    availableUntil: "22:00",
    imageUrl: "https://images.unsplash.com/photo-1486884402481-519cd5eeff02?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-6",
    storeId: "store-2",
    title: "Кофе және Донат",
    description: "Жаңа дайындалған донаттар мен капучино.",
    originalPrice: 1500,
    discountPrice: 600,
    ingredients: ["Донат", "Карамель", "Шоколад"],
    inStock: true,
    availableUntil: "20:00",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-7",
    storeId: "store-1",
    title: "Самса мен бәліштер",
    description: "Сиыр етінен жасалған ыстық самсалар.",
    originalPrice: 3200,
    discountPrice: 1500,
    ingredients: ["Самса", "Бәліш", "Қамыр"],
    inStock: true,
    availableUntil: "20:45",
    imageUrl: "https://images.unsplash.com/photo-1560697529-7236591c0066?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-8",
    storeId: "store-2",
    title: "Салаттар миксі",
    description: "Грек және Цезарь салаттарының жиынтығы.",
    originalPrice: 5000,
    discountPrice: 2200,
    ingredients: ["Тауық еті", "Брынза", "Көкөністер"],
    inStock: true,
    availableUntil: "21:00",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-9",
    storeId: "store-1",
    title: "Печенье жиынтығы",
    description: "Үйде жасалған түрлі печеньелер.",
    originalPrice: 2000,
    discountPrice: 800,
    ingredients: ["Шоколадты печенье", "Сұлы печеньесі"],
    inStock: true,
    availableUntil: "22:30",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-10",
    storeId: "store-2",
    title: "Вегетариандық сэндвіч",
    description: "Авокадо мен ірімшік қосылған балғын сэндвіч.",
    originalPrice: 3800,
    discountPrice: 1400,
    ingredients: ["Авокадо", "Руккола", "Ірімшік"],
    inStock: true,
    availableUntil: "19:30",
    imageUrl: "https://images.unsplash.com/photo-1540713434306-591d413d7bb1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-11",
    storeId: "store-1",
    title: "Шай уақыты",
    description: "Түрлі десерттер мен кекстер.",
    originalPrice: 4200,
    discountPrice: 1600,
    ingredients: ["Маффин", "Брауни", "Тарталетка"],
    inStock: true,
    availableUntil: "20:15",
    imageUrl: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-12",
    storeId: "store-2",
    title: "Бургерлер",
    description: "Тауық етінен жасалған екі мини бургер.",
    originalPrice: 4000,
    discountPrice: 1900,
    ingredients: ["Булка", "Котлета", "Тұздық"],
    inStock: true,
    availableUntil: "23:00",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-13",
    storeId: "store-1",
    title: "Француз жиынтығы",
    description: "Круассандар мен жаңа піскен макарондар.",
    originalPrice: 5500,
    discountPrice: 2500,
    ingredients: ["Макарон", "Круассан", "Ваниль"],
    inStock: true,
    availableUntil: "21:00",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-14",
    storeId: "store-2",
    title: "Суши сет",
    description: "Кешкі суши мен роллдар жиынтығы.",
    originalPrice: 8000,
    discountPrice: 3500,
    ingredients: ["Күріш", "Лосось", "Нори"],
    inStock: true,
    availableUntil: "22:00",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-15",
    storeId: "store-1",
    title: "Балғын жемістер",
    description: "Түрлі маусымдық жемістер мен жидектер.",
    originalPrice: 4500,
    discountPrice: 2100,
    ingredients: ["Құлпынай", "Көкөніс", "Жеміс"],
    inStock: true,
    availableUntil: "18:00",
    imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-16",
    storeId: "store-2",
    title: "Паста жиынтығы",
    description: "Бүгін дайындалған карбонара мен фетучини.",
    originalPrice: 6000,
    discountPrice: 2800,
    ingredients: ["Макарон", "Ірімшік", "Бекон"],
    inStock: true,
    availableUntil: "21:30",
    imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-17",
    storeId: "store-1",
    title: "Түскі ас қалдықтары",
    description: "Сорпа мен екінші тағам жиынтығы.",
    originalPrice: 4800,
    discountPrice: 2000,
    ingredients: ["Сорпа", "Гарнир", "Ет"],
    inStock: true,
    availableUntil: "16:00",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-18",
    storeId: "store-2",
    title: "Мини десерттер",
    description: "Дана сатылған ұсақ десерттер жиынтығы.",
    originalPrice: 3500,
    discountPrice: 1500,
    ingredients: ["Эклер", "Шу", "Профитроли"],
    inStock: true,
    availableUntil: "20:00",
    imageUrl: "https://images.unsplash.com/photo-1571506191039-291771120199?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-19",
    storeId: "store-1",
    title: "Ірімшік табағы",
    description: "Түрлі ірімшіктер мен жаңғақтар жиынтығы.",
    originalPrice: 7000,
    discountPrice: 3200,
    ingredients: ["Ірімшік", "Жаңғақ", "Бал"],
    inStock: true,
    availableUntil: "22:00",
    imageUrl: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basket-20",
    storeId: "store-2",
    title: "Шырын мен сусындар",
    description: "Табиғи шырындар мен балғын лимонадтар.",
    originalPrice: 2500,
    discountPrice: 1200,
    ingredients: ["Апельсин", "Жалбыз", "Лимон"],
    inStock: true,
    availableUntil: "21:00",
    imageUrl: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=600"
  }
];
