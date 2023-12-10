"use client";
import InfiniteScrollComponent from "@/components/InfinidScroll";
import React, { useEffect, useState } from "react";
import { Planet } from "@/api/model/planets";
import { StorePlanet, usePlanets } from "@/stores/planets/planetsService";
import ModulePlanet from "../planets/page";
import Headers from "@/components/Header";
import Link from "next/link";

const ModuleMain: React.FC<{ firstData: Planet[] }> = ({ firstData }) => {
  return (
    <div className="flex justify-center w-full">
      <Headers
        name={"Planets"}
        left={
          <Link
            href={{
              pathname: `/wishlist`,
            }}
            className=" cursor-pointer flex text-center text-2xl font-semibold bg-clip-text text-white"
          >
            Wishlist
          </Link>
        }
      />
      <div className="flex justify-center w-full mt-14">
        <ModulePlanet firstData={firstData} />
      </div>
    </div>
  );
};

export default ModuleMain;
