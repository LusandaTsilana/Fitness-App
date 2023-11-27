import { StyleSheet, Text } from "react-native";
import React from "react";

const TextComponent = ({ style, content }) => {
  return <Text style={[styles.text, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingBottom: 15,
  },
});

export default TextComponent;
