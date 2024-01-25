import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

//components
import CloseButton from "./CloseButton";

const ExercisesHeader = ({ style, content }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={[styles.heading, style]}>{content}</Text>

        <Pressable>
          <CloseButton style={{ position: "absolute", right: 0 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default ExercisesHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
    height: 110,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginVertical: 25,
    marginHorizontal: 15,
  },

  heading: {
    fontSize: 28,
    letterSpacing: 2.4,
    marginRight: 20,
    textAlign: "center",
  },
});
