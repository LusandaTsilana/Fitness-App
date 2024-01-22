import { StyleSheet, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

const BackButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Icon name="angle-left" size={35} style={[styles.icon, style]} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 50,
    height: 50,
  },

  icon: {
    color: "black",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
  },
});
export default BackButton;
