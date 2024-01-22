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
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <AppHeader content="Workout" showName={false} showLogout={false} />

      <ScrollView>
        <TextComponent
          content="Programs"
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: 0,
            marginBottom: 20,
          }}
        />
        <BodyParts />
        <TextComponent
          content="My Workouts"
          style={{ textAlign: "left", marginLeft: 15, marginTop: 0 }}
        />
      </ScrollView>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
