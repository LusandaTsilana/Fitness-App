//this is to ensure we can grap user info and use it throughout the app to update variables

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstname: "Lusanda",
    lastname: null,
    email: null,
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
