import { Navigate } from "react-router-dom";
import { autoLoginUser } from "../service/API_proyect/user.service";
import React from "react";

const useAutoLogin = async (allUser, userlogin) => {
  //! Error 1: en este caso el allUser y el uselogin lo traemos como parametro y no directamente del context
  try {
    const { password, email } = allUser?.data?.user;
    const custoFormData = {
      email,
      password,
    };
    const setData = await autoLoginUser(custoFormData);
    if (setData.status == 200) {
      const dataCustom = {
        token: setData.data.token,
        id: setData.data._id,
        user: setData.data.user.name,
        email: setData.data.user.email,
        image: setData.data.user.image,
        check: setData.data.user.check,
        hola: "auto",
      };

      const dataSting = JSON.stringify(dataCustom);
      userlogin(dataSting);
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error);
  }
};

export default useAutoLogin;
