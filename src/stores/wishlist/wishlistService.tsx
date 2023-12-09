"use client";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import WishlistActions from "./wishlistActions";
import { Planet } from "@/api/model/planets";

export type StoreWishlist = {
  data: Planet[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  nextPage: number;
  addWishlist: () => void;
  clear: () => void;
};

const InitialPlanetsStore = {
  data: [],
  loading: false,
  error: false,
  nextPage: 2,
  hasMore: true,
};

const wishlistStore: StateCreator<StoreWishlist> = (set, get) => ({
  ...InitialPlanetsStore,
  ...WishlistActions(set, get),
  clear: () => {
    set(() => {
      return {
        ...InitialPlanetsStore,
      };
    });
  },
});

const persistedWishlistStore = persist(wishlistStore, {
  name: "wishlist", // name of the item in storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
});

export const useWishlist = create(persistedWishlistStore);
