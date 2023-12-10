import { Planet } from "@/api/model/planets";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import planetRight from "../assets/planetRight.png";
import planetLeft from "../assets/planetLeft.png";

interface InfiniteScrollComponentProps {
  fetchMoreData?: () => void;
  data: Planet[];
  hasMore?: boolean;
}

const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({ data, hasMore = true, fetchMoreData = () => {} }) => {
  return (
    <InfiniteScroll
      className="grid grid-cols-5 w-[95vw] place-content-center justify-center items-center pt-4 pb-20"
      dataLength={data.length} // This is important to prevent infinite loops
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollThreshold={1}
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
            <div className={`p-2 absolute bottom-0 cursor-pointer w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <p className="text-violet-900 font-semibold text-xl">Planet {item.name}</p>
            </div>
          </Link>
        );
      })}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
