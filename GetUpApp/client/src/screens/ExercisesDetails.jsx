import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ExercisesDetails() {
  const route = useRoute();
  const { params } = route || {};
  const { item } = params || {};

  console.log("Exercise Details: ", item);
}

const styles = StyleSheet.create({});
