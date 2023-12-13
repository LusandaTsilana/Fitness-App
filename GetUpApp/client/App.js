import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../client/src/navigation/AuthNavigator";
import AppNavigator from "../client/src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { AuthContextProvider, AuthContext } from "./src/context/AuthContext";
import { ChatContextProvider } from "./src/context/ChatContext";

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
    <ChatContextProvider user={user}>
      <NavigationContainer>
        <View style={styles.container} edges={["top"]}>
          <StatusBar style="auto" />
          {user ? <AppNavigator /> : <AuthNavigator />}
        </View>
      </NavigationContainer>
    </ChatContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
