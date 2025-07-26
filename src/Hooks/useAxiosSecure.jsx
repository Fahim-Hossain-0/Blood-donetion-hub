// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { AuthContext } from "../providers/AuthProvider";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log("🚀 ~ useAxiosSecure ~ accessToken:", user?.accessToken);
  const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
  });


  // useEffect(() => {
  //   // instance.interceptors.response()
  // }, [])
  

  return instance;
};

export default useAxiosSecure;
