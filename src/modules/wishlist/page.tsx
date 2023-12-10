"use client";
import React, { useEffect, useState } from "react";
import { StoreWishlist, useWishlist } from "@/stores/wishlist/wishlistService";
import Headers from "@/components/Header";
import Link from "next/link";
import { Planet } from "@/api/model/planets";
import Image from "next/image";
import planetRight from "@/assets/planetRight.png";
import planetLeft from "@/assets/planetLeft.png";
import { useRouter } from "next/navigation";
import NotFound from "@/components/NotFound";

const limits = [5, 10, 15, 20, 25, 50, 100];

const ModuleWishlist: React.FC = () => {
  const router = useRouter();
  const { dataWishlist, clear }: StoreWishlist = useWishlist();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(Math.ceil(dataWishlist.length / limit));

  useEffect(() => {
    setPages(Math.ceil(dataWishlist.length / limit));
  }, [dataWishlist.length, limit]);

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = dataWishlist.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const submitRemoveAllWishList = () => {
    clear();
  };

  const loopWithArrayPages = Array.from({ length: pages }, (_, index) => (
    <li key={index}>
      <a
        onClick={() => {
          paginate(index + 1);
        }}
        href="#"
        className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 md:hover:bg-gray-100 md:hover:text-gray-700 ${currentPage === index + 1 ? "bg-violet-800 text-white" : "text-gray-500"}`}
      >
        {index + 1}
      </a>
    </li>
  ));

  if (!dataWishlist.length) {
    return (
      <div className="flex justify-center w-full">
        <Headers
          name={"Wishlist"}
          callBack={() => {
            router.back();
          }}
        />
        <div className="flex flex-col justify-center w-full mt-14">
          <NotFound name={"Wishlist"} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <Headers
        name={"Wishlist"}
        callBack={() => {
          router.back();
        }}
        left={
          <>
            <button onClick={submitRemoveAllWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Remove All From Wishlist
            </button>
          </>
        }
      />
      <div className="flex flex-col justify-center w-full mt-14">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="grid grid-cols-5 max-[480px]:grid-cols-2 max-[640px]:grid-cols-3 max-[720px]:grid-cols-3 max-[1080px]:grid-cols-4  w-[95vw] place-content-center justify-center items-center pt-4 pb-20">
            {currentItems.map((item: Planet, index: number) => {
              return (
                <Link
                  href={{
                    pathname: `/planets/${item.url!.match(/planets\/(\d+)\//)?.[1]}`,
                  }}
                  key={index}
                  className="relative cursor-pointer bg-gradient-to-r transition-transform duration-300 transform hover:scale-105 from-purple-400 to-pink-500 m-2 rounded-xl"
                >
                  <Image style={{ objectFit: "cover", borderRadius: 10 }} width={1000} height={900} src={index % 2 === 0 ? planetLeft : planetRight} alt="planet image" />
                  <div className={`p-2 absolute bottom-0 cursor-pointer w-full flex justify-end`}>
                    <p className="text-violet-900 font-semibold text-xl max-[480px]:text-sm max-[1080px]:text-lg">Planet {item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex fixed bottom-10 flex-col justify-center items-center w-full">
          <nav className="flex justify-end w-[95vw]">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  onClick={() => {
                    if (currentPage > 1) {
                      paginate(currentPage - 1);
                    }
                  }}
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              {loopWithArrayPages}
              <li>
                <a
                  onClick={() => {
                    if (currentPage < pages) {
                      paginate(currentPage + 1);
                    }
                  }}
                  href="#"
                  className="mr-2 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Next
                </a>
              </li>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(+e.target.value);
                  setCurrentPage(1);
                }}
                id="countries"
                className=" pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
              >
                {limits.map((e, index) => {
                  return (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ModuleWishlist;
