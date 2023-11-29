import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../client/src/navigation/AuthNavigator";
// import AppNavigator from "./client/src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import { AuthContext, AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  const [user] = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          {/* {authenticated ? <AppNavigator /> : */}
          <AuthNavigator />
        </SafeAreaView>
      </AuthContextProvider>
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
