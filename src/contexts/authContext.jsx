import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //--------------------Login---------------------------
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    const parseUser = JSON.parse(data);

    if (data) {
      return parseUser;
    } else {
      return null;
    }
  });

  const [allUser, setAllUser] = useState({
    data: {
      user: {
        password: "",
        email: "",
      },
    },
  });

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");
        break;

      default:
        break;
    }
  };
  const userlogin = (data) => {
    localStorage.setItem("user", data);
    const parseData = JSON.parse(data);
    setUser(() => parseData);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      userlogin,
      allUser,
      setAllUser,
      bridgeData,
    }),
    [user, allUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
