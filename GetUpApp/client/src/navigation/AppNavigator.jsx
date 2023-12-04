import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Today from "../screens/Today";
import Workout from "../screens/Workout";
import Community from "../screens/Community";
import Profile from "../screens/Profile";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

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
    height: 89,
    backgroundColor: "#FACB95",
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
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name="home-outline"
                  size={30}
                  color={focused ? "#9F4E04" : "black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5Icon
                  name="dumbbell"
                  size={30}
                  color={focused ? "#9F4E04" : "black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Workout</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name="chatbubbles-outline"
                  size={30}
                  color={focused ? "#9F4E04" : "black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Chat</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesignIcon
                  name="user"
                  size={30}
                  color={focused ? "#9F4E04" : "black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
