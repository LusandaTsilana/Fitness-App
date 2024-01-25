import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

//components
import ExercisesHeader from "../../components/ExercisesHeader";
import TextComponent from "../../components/TextComponent";
import Button from "../../components/Buttons";

const LegsExplore = () => {
  return (
    <ScrollView style={{ marginBottom: 100, backgroundColor: "white" }}>
      <View>
        <ExercisesHeader content="Legs" />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button text="Start" />
        </View>
        <TextComponent
          content="Exercises"
          style={{ textAlign: "left", fontSize: 20, marginLeft: 15 }}
        />

        <View style={styles.exercises}>
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LegsExplore;

const styles = StyleSheet.create({});
