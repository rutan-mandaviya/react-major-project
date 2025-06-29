import axios from "../../api/axiosconfig";
import { toast, ToastContainer } from "react-toastify";
import { Loaduser, removeuser } from "../reducers/Userslic";
import { lazy } from "react";



export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) {
        dispatch(Loaduser(user));
      
    } else console.log("user not loged in ");
  } catch (error) {
    toast.success(error);
  }
};
export const asyncLogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("users");
    dispatch(removeuser())
    console.log("user logged out!!");
  } catch (error) {
    toast.success(error);
  }
};

export const asyncLoginDetails = (user,navigate) => async (dispatch, getState) => {
 
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );


    if (data.length > 0) {
      localStorage.setItem("users", JSON.stringify(data[0]));
      dispatch(Loaduser(data[0]));
      navigate("/")
      

    } else {
      toast.error("Invalid email or password");
    }

  } catch (error) {
    toast.error("Something went wrong during login");
    console.error(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    
  } catch (error) {
    toast.success(error);
  }
};
export const asyncupdateuser = (id,users) => async (dispatch, getState) => {
  try {
     const {data}=await axios.patch("/users/"+id,users);
  
    localStorage.setItem("users", JSON.stringify(data));
     dispatch(asyncCurrentUser(users))
    toast.success("user Update successfully!");
  } catch (error) {
    toast.error(error.message || "Failed to create product");
  }
};

export const asyncdeleteUser = (id) => async (dispatch, getState) => {
  try {
     await axios.delete('/users/'+id);
    dispatch(asyncLogoutuser()); // Reload updated list

    toast.success("User Delete successfully!");
  } catch (error) {
    toast.error(error.message || "Failed to create product");
  }
};