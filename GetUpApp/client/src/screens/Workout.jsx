import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import TextComponent from "../components/TextComponent";

const Workout = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <AppHeader content="Workout" showName={false} showLogout={false} />
      <TextComponent
        content="Programs"
        style={{ textAlign: "left", marginLeft: 15, marginTop: 0 }}
      />
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
