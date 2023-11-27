//this is to ensure we can grap user info and use it throughout the app to update variables

import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  console.log("registerInfo", registerInfo);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  return (
    <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
