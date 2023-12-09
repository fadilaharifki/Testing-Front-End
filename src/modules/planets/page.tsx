"use client";
import InfiniteScrollComponent from "@/components/InfinidScroll";
import instanceApiAxios from "@/api/services";
import React, { useEffect, useState } from "react";
import { Planet } from "@/api/model/planets";

interface DataType {}

interface Data {}

type FormValues = {};

const ModulePlanet: React.FC = () => {
  const [data, setData] = useState<Planet[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  // console.log(nextPage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMoreData = async () => {
    try {
      const responseCategory = await instanceApiAxios.get(`/planets?page=${nextPage}`);
      // console.log(responseCategory);

      if (responseCategory.data.next) {
        setNextPage(responseCategory.data.next.match(/page=(\d+)/)[1]);
        setData([...data, ...responseCategory.data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error: any) {
      if (error.message === "Request failed with status code 404") {
        setHasMore(false);
      }
    }
  };

  return (
    <div className="flex justify-center w-full">
      <InfiniteScrollComponent hasMore={hasMore} fetchMoreData={fetchMoreData} data={data} />
    </div>
  );
};

export default ModulePlanet;
