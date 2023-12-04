//this file is to ensure we can grap user info and use it throughout the app to update variables
import { createContext, useCallback, useEffect, useState } from "react";

//connection of server to context of the app
import { baseUrl, postRequest } from "../utils/services";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //below is registrates states
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //below is login states
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  console.log("User", user);
  console.log("Login Info", loginInfo);

  useEffect(() => {
    const getUser = async () => {
      try {
        // Await the result of AsyncStorage.getItem
        const userString = await AsyncStorage.getItem("User");
        // Parse the retrieved data
        const user = JSON.parse(userString);
        setUser(user);
      } catch (error) {
        console.error("Error reading user data:", error);
      }
    };

    getUser();
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  //user registration
  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      //storing user data in local storage so user doesnt have to login again when page refreshes
      // localStorage.setItem("User", JSON.stringify(response)); -- for web
      AsyncStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },

    [registerInfo]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/users/login`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      //storing user data in local storage so user doesnt have to login again when page refreshes
      AsyncStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [loginInfo]
  );

  //user logout, to clear storage & states
  const logoutUser = useCallback(() => {
    AsyncStorage.removeItem("User");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        loginInfo,
        updateLoginInfo,
        loginError,
        isLoginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
