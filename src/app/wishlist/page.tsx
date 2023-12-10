import dynamic from "next/dynamic";

const ModuleWishlist = dynamic(() => import("@/modules/wishlist/page"), {
  ssr: false,
});

const WishlistPlanets = async () => {
  return <ModuleWishlist />;
};

export default WishlistPlanets;
