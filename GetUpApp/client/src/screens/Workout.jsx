import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import TextComponent from "../components/TextComponent";
import BodyPartsGrid from "../components/BodyPartsGrid";

import BodyParts from "../components/BodyParts";

const Workout = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <AppHeader content="Workout" showName={false} showLogout={false} />

      <View>
        <TextComponent
          content="Programs"
          style={{ textAlign: "left", marginLeft: 15, marginTop: 0 }}
        />
        <BodyParts />
        <TextComponent
          content="My Workouts"
          style={{ textAlign: "left", marginLeft: 15, marginTop: 0 }}
        />
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
