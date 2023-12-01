import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Buttons = ({ text, onPress, loading, style, styleS }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, styleS]}>
        {loading ? "Loading..." : text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E88328",
    width: 140,
    height: 42,
    margin: 10,
    flexShrink: 0,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    margin: 5,
    textAlign: "center",
    letterSpacing: 2.4,
  },
});
export default Buttons;
