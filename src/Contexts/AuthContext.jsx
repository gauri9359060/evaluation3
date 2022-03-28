import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [token, setToken] = useState("");
  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const Logout = () => {
    setIsAuth(false);
    setToken("");
  };

  return <AuthContext.Provider value={{isAuth,login,Logout,token}}>{children}</AuthContext.Provider>;
};
