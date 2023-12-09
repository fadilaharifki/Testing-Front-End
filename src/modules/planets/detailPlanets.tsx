"use client";
import { DetailPlanet } from "@/api/model/detailPlanets";

interface Props {
  data: DetailPlanet;
}

const ModuleDetailPlanet: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex w-screen items-center mt-4">
        <div className="flex w-[95%] justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add To Wishlist</button>
        </div>
      </div>
      <div>ModuleDetailPlanet</div>
    </div>
  );
};
export default ModuleDetailPlanet;
