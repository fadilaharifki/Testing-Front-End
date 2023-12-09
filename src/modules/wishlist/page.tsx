"use client";
import React from "react";
import { StoreWishlist, useWishlist } from "@/stores/wishlist/wishlistService";

interface DataType {}

interface Data {}

type FormValues = {};

const ModuleWishlist: React.FC = () => {
  const { data }: StoreWishlist = useWishlist();

  return <div className="flex justify-center w-full">Wishlist</div>;
};

export default ModuleWishlist;
