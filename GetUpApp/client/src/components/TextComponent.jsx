import { StyleSheet, Text } from "react-native";
import React from "react";

const TextComponent = ({ style, content }) => {
  return <Text style={[styles.text, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
    letterSpacing: 2.4,
    color: "black",
  },
});

export default TextComponent;
