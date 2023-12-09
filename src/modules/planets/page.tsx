"use client";
import InfiniteScrollComponent from "@/components/InfinidScroll";
import React, { useEffect, useState } from "react";
import { Planet } from "@/api/model/planets";
import { StorePlanet, usePlanets } from "@/stores/planets/planetsService";

interface DataType {}

interface Data {}

type FormValues = {};

const ModulePlanet: React.FC<{ firstData: Planet[] }> = ({ firstData }) => {
  const { data, hasMore, getDataPlanets, clear }: StorePlanet = usePlanets();
  const fetchMoreData = async () => {
    getDataPlanets();
  };

  useEffect(() => {
    // clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center w-full">
      <InfiniteScrollComponent hasMore={hasMore} fetchMoreData={fetchMoreData} data={[...firstData, ...data]} />
    </div>
  );
};

export default ModulePlanet;
