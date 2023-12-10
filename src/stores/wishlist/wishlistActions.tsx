import { ParamAddWishListh, StoreWishlist } from "./wishlistService";
import Swal from "sweetalert2";

const WishlistActions = (set: (newState: StoreWishlist | ((prevState: StoreWishlist) => StoreWishlist)) => void, get: () => StoreWishlist) => {
  return {
    addWishlist: async ({ item }: ParamAddWishListh): Promise<void> => {
      if (get().dataWishlist.length) {
        const temp = get().dataWishlist.find((e) => e.name === item.name);

        if (!temp) {
          set((prevState) => {
            return {
              ...prevState,
              dataWishlist: [...get().dataWishlist, item],
            };
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success add to wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        set((prevState) => {
          return {
            ...prevState,
            dataWishlist: [item],
          };
        });
      }
    },
    removeWishlist: async ({ item }: ParamAddWishListh): Promise<void> => {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to delete ${item.name} from the wishlist`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (get().dataWishlist.length) {
            const newDataWishlist = get().dataWishlist.filter((obj) => obj.name !== item.name);
            set((prevState) => {
              return {
                ...prevState,
                dataWishlist: newDataWishlist,
              };
            });
          }
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
        }
      });
    },
  };
};

export default WishlistActions;
