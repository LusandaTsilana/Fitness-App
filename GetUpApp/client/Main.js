import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";

import { AuthContextProvider } from "./src/context/AuthContext";

function Main() {
  return <App />;
}

//Component is registered here with AppRegistry
AppRegistry.registerComponent("GetUpApp", () => Main);

//Run the app
AppRegistry.runApplication("GetUpApp", {});
