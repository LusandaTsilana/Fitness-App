import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../client/src/navigation/AuthNavigator";
import AppNavigator from "../client/src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { AuthContextProvider, AuthContext } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <InnerApp />
    </AuthContextProvider>
  );
}

function InnerApp() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <View style={styles.container} edges={["top"]}>
        <StatusBar style="auto" />
        {user ? <AppNavigator /> : <AuthNavigator />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
