import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/AntDesign";

const CloseButton = ({ style }) => {
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Icon name="closecircleo" size={35} style={[styles.icon, style]} />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#FACB95",
  },
});
