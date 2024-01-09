import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import TextComponent from "../components/TextComponent";
import BodyPartsGrid from "../components/BodyPartsGrid";

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
          style={{ textAlign: "left", marginLeft: 15, marginTop: 0 }}
        />
        <BodyPartsGrid />
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
