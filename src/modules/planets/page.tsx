"use client";
import InfiniteScrollComponent from "@/components/InfinidScroll";
import React from "react";
import { Planet } from "@/api/model/planets";
import { StorePlanet, usePlanets } from "@/stores/planets/planetsService";

const ModulePlanet: React.FC<{ firstData: Planet[] }> = ({ firstData }) => {
  const { data, hasMore, getDataPlanets, clear }: StorePlanet = usePlanets();
  const fetchMoreData = async () => {
    getDataPlanets();
  };

  return (
    <div className="flex justify-center w-full">
      {/* <button onClick={() => clear()}>hapus semua</button> */}
      <InfiniteScrollComponent hasMore={hasMore} fetchMoreData={fetchMoreData} data={[...firstData, ...data]} />
    </div>
  );
};

export default ModulePlanet;
