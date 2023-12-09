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
  // Simulate fetching more data
  //   const fetchMoreData = () => {
  //     // In a real application, you would fetch more data from an API
  //     setTimeout(() => {
  //       const newItems = Array.from({ length: 10 }, (_, index) => `Item ${items.length + index + 1}`);
  //       setItems((prevItems) => [...prevItems, ...newItems]);

  //       // In this example, stop fetching more data after 50 items
  //       if (items.length >= 50) {
  //         setHasMore(false);
  //       }
  //     }, 1500);
  //   };

  // Simulate initial data fetching
  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      className="grid grid-cols-3 w-[95vw] place-content-center justify-center items-center"
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
            className=" cursor-pointer bg-gradient-to-r from-purple-400 to-pink-500 p-4 m-2 h-56 rounded-xl"
            key={index}
          >
            <div>{item.name}</div>
            <div>{item.name}</div>
            <div>{item.name}</div>
            <div>{item.name}</div>
            <div>{item.name}</div>
            <div>{item.name}</div>
          </Link>
        );
      })}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
