import { StyleSheet, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

const BackButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Icon name="angle-left" size={hp(3.5)} style={[styles.icon, style]} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 52,
  },

  icon: {
    color: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default BackButton;
