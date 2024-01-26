import { StyleSheet, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-virtualized-view";

//components
import AppHeader from "../components/AppHeader";
import TextComponent from "../components/TextComponent";

import BodyParts from "../components/BodyParts";

const Workout = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        marginBottom: 50,
      }}
    >
      <AppHeader content="Workout" showName={false} showLogout={false} />

      <ScrollView>
        <TextComponent
          content="Exercise Library"
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 20,
            fontSize: 20,
          }}
        />
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
          content="Exercise Library"
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 20,
            fontSize: 20,
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({});
