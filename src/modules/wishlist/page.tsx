"use client";
import React from "react";
import { StoreWishlist, useWishlist } from "@/stores/wishlist/wishlistService";
import InfiniteScrollComponent from "@/components/InfinidScroll";
import Headers from "@/components/Header";

const ModuleWishlist: React.FC = () => {
  const { dataWishlist, clear }: StoreWishlist = useWishlist();

  const submitRemoveAllWishList = () => {
    clear();
  };

  return (
    <div className="flex justify-center w-full">
      <Headers
        name={"Wishlist"}
        left={
          <>
            <button onClick={submitRemoveAllWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Remove All From Wishlist
            </button>
          </>
        }
      />
      <div className="flex justify-center w-full mt-14">
        <InfiniteScrollComponent data={dataWishlist} />
      </div>
    </div>
  );
};

export default ModuleWishlist;
