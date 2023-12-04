import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";

const Workout = () => {
  return (
    <View>
      <AppHeader content="Workout" showName={false} />
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
