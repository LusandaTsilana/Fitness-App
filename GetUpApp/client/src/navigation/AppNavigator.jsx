import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//app screens
import Today from "../screens/Today";
import Yoga from "../screens/ExploreModals/Yoga";
import Boxing from "../screens/ExploreModals/Boxing";
import Abs from "../screens/ExploreModals/Abs";
import LegsExplore from "../screens/ExploreModals/LegsExplore";

import Workout from "../screens/Workout";
import Exercises from "../screens/Exercises";
import ExercisesDetails from "../screens/ExercisesDetails";
import Community from "../screens/Community";
import ChatBox from "../screens/ChatBox";
import Profile from "../screens/Profile";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Stack = createNativeStackNavigator();
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
        name="TodayStack"
        component={TodayStack}
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
        name="WorkoutStack"
        component={WorkoutStack}
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
        name="CommunityStack"
        component={CommunityStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name="chatbubbles-outline"
                  size={30}
                  color={focused ? "#9F4E04" : "black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Community</Text>
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

const WorkoutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="MuscleGroupNavigator"
        component={MuscleGroupNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Exercises"
        component={Exercises}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="ExercisesDetails"
        component={ExercisesDetails}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

const TodayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today"
        component={Today}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Yoga"
        component={Yoga}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="Boxing"
        component={Boxing}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="Abs"
        component={Abs}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="LegsExplore"
        component={LegsExplore}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatBox"
        component={ChatBox}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
