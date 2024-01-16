import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const bodyParts = [
  {
    source: require("../../assets/fitnessmodels/amrsshoulders.png"),
    name: "Arms",
    style: {
      width: 150,
      height: 132,
    },
  },

  {
    source: require("../../assets/fitnessmodels/abss.png"),
    name: "Abs",
    style: {
      width: 150,
      height: 132,
      borderRadius: 10,
    },
  },

  {
    source: require("../../assets/fitnessmodels/buttock.png"),
    name: "Legs",
    style: {
      width: 150,
      height: 133,
      borderRadius: 10,
    },
  },

  {
    source: require("../../assets/fitnessmodels/fullbody.png"),
    name: "Cardio",
    style: {
      width: 76,
      height: 132,
      marginLeft: 40,
    },
  },
];

const styles = StyleSheet.create({});
