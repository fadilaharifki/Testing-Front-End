import { StoreWishlist } from "./wishlistService";

const WishlistActions = (set: (newState: StoreWishlist | ((prevState: StoreWishlist) => StoreWishlist)) => void, get: () => StoreWishlist) => {
  return {
    addWishlist: async (): Promise<void> => {
      try {
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  };
};

export default WishlistActions;
