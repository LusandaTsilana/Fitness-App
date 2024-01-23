import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-virtualized-view";

//components
import AppHeader from "../components/AppHeader";
import TextComponent from "../components/TextComponent";
import BodyPartsGrid from "../components/BodyPartsGrid";

import BodyParts from "../components/BodyParts";

const Workout = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <AppHeader content="Workout" showName={false} showLogout={false} />

      <ScrollView>
        <TextComponent
          content="Target Area"
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 20,
            fontSize: 20,
          }}
        />
        <BodyParts />
        <TextComponent
          content="My Workouts"
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: 20,
            fontSize: 20,
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({});
