import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { Loadproducts } from "../reducers/Produtsslic";

import { asyncupdateuser } from "./UserAction";

// ✅ Load all products from backend
export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('http://localhost:3000/products');
    dispatch(Loadproducts(data));
  } catch (error) {
    toast.error(error.message || "Failed to load products");
  }
};

// ✅ Create new product and refresh product list
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
   await axios.post('/products', product);
    dispatch(asyncLoadProduct()); // Reload updated list
    toast.success("Product created successfully!");
  } catch (error) {
    toast.error(error.message || "Failed to create product");
  }
};
export const asyncupdateProduct = (id,product) => async (dispatch, getState) => {
  try {
     await axios.patch('/products/'+id, product);
    dispatch(asyncLoadProduct()); // Reload updated list
    toast.success("Product Update successfully!");
  } catch (error) {
    toast.error(error.message || "Failed to create product");
  }
};
export const asyncdeleteProduct = (id, users) => async (dispatch, getState) => {
  try {
    // 1. Delete the product from products list
    await axios.delete(`/products/${id}`);

    // 2. Loop through all users
    for (const singleUser of users) {
      if (singleUser.cart && Array.isArray(singleUser.cart)) {
        // 3. Filter out the deleted product from cart
        const updatedCart = singleUser.cart.filter(
          (cartItem) => cartItem.item.id !== id
        );

        // 4. Only update user if cart was changed
        if (updatedCart.length !== singleUser.cart.length) {
          const updatedUser = {
            ...singleUser,
            cart: updatedCart,
          };

          // 5. Dispatch update user action
          dispatch(asyncupdateuser(singleUser.id, updatedUser));
        }
      }
    }

    toast.success("Product deleted successfully from all carts!");
  } catch (error) {
    toast.error(error.message || "Failed to delete product");
  }
};
