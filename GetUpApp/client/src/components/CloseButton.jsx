import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const CloseButton = ({ style }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Icon name="closecircleo" size={hp(4.5)} style={[styles.icon, style]} />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    position: "absolute",
    marginTop: 6,
    right: 0,
    top: 0,
  },
  icon: {
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },
});
