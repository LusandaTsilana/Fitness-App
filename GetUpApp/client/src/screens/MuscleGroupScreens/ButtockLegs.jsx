import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

//components
import ExercisesHeader from "../../components/ExercisesHeader";
import Button from "../../components/Buttons";
import TextComponent from "../../components/TextComponent";

const ButtockLegs = () => {
  return (
    <ScrollView style={{ marginBottom: 50, backgroundColor: "white" }}>
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

export default ButtockLegs;

const styles = StyleSheet.create({});
