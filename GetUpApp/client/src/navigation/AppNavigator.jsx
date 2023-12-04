import React from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Today from "../screens/Today";
import Workout from "../screens/Workout";
import Community from "../screens/Community";
import Profile from "../screens/Profile";

//icons
import Icon from "react-native-vector-icons/Ionicons";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "green",
  },
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarIcon: ({ focused }) => {
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon name="home-outline" size={30} color="black" />
            </View>;
          },
        }}
      />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
