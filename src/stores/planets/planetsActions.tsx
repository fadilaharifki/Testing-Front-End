import instanceApiAxios from "@/api/services";
import { StorePlanet } from "./planetsService";

const PlanetsActions = (set: (newState: StorePlanet | ((prevState: StorePlanet) => StorePlanet)) => void, get: () => StorePlanet) => {
  return {
    getDataPlanets: async (): Promise<void> => {
      try {
        const res = await instanceApiAxios.get(`/planets?page=${get().nextPage}`);

        if (res.data.next) {
          set((prevState) => {
            return {
              ...prevState,
              data: [...get().data, ...res.data.results],
              nextPage: +res.data.next.match(/page=(\d+)/)[1],
            };
          });
        } else {
          set((prevState) => {
            return {
              ...prevState,
              hasMore: false,
            };
          });
        }
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  };
};

export default PlanetsActions;
