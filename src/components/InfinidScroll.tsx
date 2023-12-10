import { Planet } from "@/api/model/planets";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface InfiniteScrollComponentProps {
  fetchMoreData?: () => void;
  data: Planet[];
  hasMore?: boolean;
}

const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({ data, hasMore = true, fetchMoreData = () => {} }) => {
  return (
    <InfiniteScroll
      className="grid grid-cols-2 w-[95vw] place-content-center justify-center items-center"
      dataLength={data.length} // This is important to prevent infinite loops
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollThreshold={1}
    >
      {data.map((item: Planet, index: number) => {
        // console.log(item);

        return (
          <Link
            href={{
              pathname: `/planets/${item.url!.match(/planets\/(\d+)\//)?.[1]}`,
            }}
            className=" cursor-pointer bg-gradient-to-r from-purple-400 to-pink-500 p-4 m-2 h-56 rounded-xl"
            key={index}
          >
            <p>{item.name}</p>
            <p>{item.name}</p>
            <p>{item.name}</p>
            <p>{item.name}</p>
            <p>{item.name}</p>
            <p>{item.name}</p>
          </Link>
        );
      })}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
