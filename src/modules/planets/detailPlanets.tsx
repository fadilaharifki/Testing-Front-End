"use client";
import { DetailPlanet } from "@/api/model/detailPlanets";
import Headers from "@/components/Header";
import { useWishlist } from "@/stores/wishlist/wishlistService";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  data: DetailPlanet;
}

const ModuleDetailPlanet: React.FC<Props> = ({ data }) => {
  const { addWishlist, dataWishlist, removeWishlist, clear } = useWishlist();
  const [isAdd, setIsAdd] = useState(true);

  const submitAddWishList = () => {
    addWishlist({ item: data });
  };

  const submitRemoveWishList = () => {
    // clear();
    removeWishlist({ item: data });
  };
  useEffect(() => {
    const temp = dataWishlist.find((e) => e.name === data.name);
    if (temp) {
      setIsAdd(false);
    } else {
      setIsAdd(true);
    }
  }, [data.name, dataWishlist]);

  return (
    <div className="flex flex-col w-screen">
      <Headers
        name={"Planets"}
        left={
          <>
            {isAdd ? (
              <button onClick={submitAddWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                Add To Wishlist
              </button>
            ) : (
              <button onClick={submitRemoveWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                Remove From Wishlist
              </button>
            )}
          </>
        }
      />
      <div className="flex justify-center w-full mt-16">{data.name}</div>
    </div>
  );
};
export default ModuleDetailPlanet;
