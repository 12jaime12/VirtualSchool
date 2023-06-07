import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //--------------------Login---------------------------

  const userlogin = (data) => {
    localStorage.setItem("user", data);
    const parseData = JSON.parse(data);
    setUser(() => parseData);
  };
};

export const useAuth = () => {
  return UseContext(AuthContext);
};
