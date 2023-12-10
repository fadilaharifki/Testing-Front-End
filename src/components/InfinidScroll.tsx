import { Planet } from "@/api/model/planets";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import planetRight from "@/assets/planetRight.png";
import planetLeft from "@/assets/planetLeft.png";
interface InfiniteScrollComponentProps {
  fetchMoreData?: () => void;
  data: Planet[];
  hasMore?: boolean;
}

const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({ data, hasMore = true, fetchMoreData = () => {} }) => {
  return (
    <InfiniteScroll
      className="grid grid-cols-5 max-[480px]:grid-cols-2 max-[640px]:grid-cols-3 max-[720px]:grid-cols-3 max-[1080px]:grid-cols-4  w-[95vw] place-content-center justify-center items-center pt-4 pb-20"
      dataLength={data.length} // This is important to prevent infinite loops
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center items-center" role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      }
      scrollThreshold={0.5}
      onScroll={(e) => {
        console.log(e);
      }}
    >
      {data.map((item: Planet, index: number) => {
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
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
