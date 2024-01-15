import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components

import BackButton from "./BackButton";

const ExercisesHeader = ({ style, content }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <BackButton />
        </View>
        <View>
          <Text style={[styles.heading, style]}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default ExercisesHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 110,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 25,
    marginHorizontal: 15,
  },

  heading: {
    fontSize: 28,
    letterSpacing: 2.4,
    marginRight: 20,
  },
});
