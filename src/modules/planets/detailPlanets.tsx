"use client";
import { DetailPlanet } from "@/api/model/detailPlanets";
import Headers from "@/components/Header";
import { getDateTimeInfo } from "@/lib/generateDate";
import { useWishlist } from "@/stores/wishlist/wishlistService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  data: DetailPlanet;
}

const ModuleDetailPlanet: React.FC<Props> = ({ data }) => {
  const router = useRouter();
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

  const renderValue = (key: string, value: string) => {
    const { date, hour } = getDateTimeInfo(value);

    switch (key) {
      case "rotation_period":
        return <td className={`py-2 px-4 border-b uppercase`}>{value} rpm</td>;
      case "population":
        return <td className={`py-2 px-4 border-b uppercase`}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>;
      case "diameter":
        return <td className={`py-2 px-4 border-b uppercase`}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km</td>;
      case "created":
        return (
          <td className={`py-2 px-4 border-b uppercase`}>
            {date}, {hour}
          </td>
        );
      case "edited":
        return (
          <td className={`py-2 px-4 border-b uppercase`}>
            {date}, {hour}
          </td>
        );
      case "url":
        return (
          <td className={`py-2 px-4 border-b`}>
            <a href={value} target={value} className="lowercase">
              {value}
            </a>
          </td>
        );
      default:
        return <td className={`py-2 px-4 border-b uppercase`}>{value}</td>;
    }
  };

  return (
    <div className="flex flex-col w-screen">
      <Headers
        callBack={() => {
          router.back();
        }}
        name={"Detail Planets"}
        left={
          <>
            {isAdd ? (
              <button onClick={submitAddWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                Add To Wishlist
              </button>
            ) : (
              <button onClick={submitRemoveWishList} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                Remove
              </button>
            )}
          </>
        }
      />
      <div className="flex justify-center w-full mt-16 px-2">
        <div className="relative overflow-x-auto">
          <table className="min-w-full text-xs uppercase bg-white border border-gray-300">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Planet Key
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value], i) => {
                if (Array.isArray(value)) {
                  return (
                    <tr key={i}>
                      <td className="py-2 px-4 border-b font-bold">{key}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex flex-col">
                          {value.map((val, idx) => {
                            return (
                              <a href={val} target={val} className="pb-1 lowercase" key={idx}>
                                {val}
                              </a>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={i}>
                      <td className="py-2 px-4 border-b font-bold">{key.replaceAll("_", " ")}</td>
                      {renderValue(key, value)}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ModuleDetailPlanet;
