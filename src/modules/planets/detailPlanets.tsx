"use client";
import { DetailPlanet } from "@/api/model/detailPlanets";
import Headers from "@/components/Header";
import Link from "next/link";

interface Props {
  data: DetailPlanet;
}

const ModuleDetailPlanet: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col w-screen">
      <Headers name={"Planets"} left={<button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Add To Wishlist</button>} />
      <div className="flex justify-center w-full mt-16">asdasdd</div>
    </div>
  );
};
export default ModuleDetailPlanet;
