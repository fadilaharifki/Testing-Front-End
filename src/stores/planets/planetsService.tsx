"use client";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import PlanetsActions from "./planetsActions";
import { Planet } from "@/api/model/planets";

export type StorePlanet = {
  data: Planet[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  nextPage: number;
  getDataPlanets: () => void;
  clear: () => void;
};

const InitialPlanetsStore = {
  data: [],
  loading: false,
  error: false,
  nextPage: 2,
  hasMore: true,
};

const planetsStore: StateCreator<StorePlanet> = (set, get) => ({
  ...InitialPlanetsStore,
  ...PlanetsActions(set, get),
  clear: () => {
    set(() => {
      return {
        ...InitialPlanetsStore,
      };
    });
  },
});

const persistedPlanetsStore = persist(planetsStore, {
  name: "planets", // name of the item in storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
});

export const usePlanets = create(persistedPlanetsStore);
