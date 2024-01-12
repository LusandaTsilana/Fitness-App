import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

//components
import ExercisesHeader from "../../components/ExercisesHeader";
import TextComponent from "../../components/TextComponent";
import Button from "../../components/Buttons";
import ArmsLibrary from "../../components/Exercise Library/ArmsLibrary";

const Abs = () => {
  return (
    <ScrollView style={{ marginBottom: 100, backgroundColor: "white" }}>
      <View>
        <ExercisesHeader content="Arms" />
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
          <View>
            <ArmsLibrary />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Abs;

const styles = StyleSheet.create({});
