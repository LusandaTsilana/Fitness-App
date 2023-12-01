//this file is to ensure we can grap user info and use it throughout the app to update variables
import { createContext, useCallback, useEffect, useState } from "react";

//connection of server to context of the app
import { baseUrl, postRequest } from "../utils/services";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  console.log("User", user);

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
      // localStorage.setItem("User", JSON.stringify(response));
      AsyncStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },

    [registerInfo],
    navigation.navigate()
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
