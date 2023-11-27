import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../client/src/navigation/AuthNavigator";
// import AppNavigator from "./client/src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  // const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* {authenticated ? <AppNavigator /> : */}
        <AuthNavigator />
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
