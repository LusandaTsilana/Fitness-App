import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Today from "../screens/Today";
import Workout from "../screens/Workout";
import Community from "../screens/Community";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today"
        component={Today}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
