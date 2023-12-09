import instanceApiAxios from "@/api/services";
import { usePlanets } from "@/stores/planets/planetsService";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ModulePlanet = dynamic(() => import("@/modules/planets/page"), {
  ssr: false,
});

async function getData() {
  const res = await instanceApiAxios.get(`/planets?page=1`);
  return res.data.results;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <ModulePlanet firstData={data} />
    </>
  );
}
