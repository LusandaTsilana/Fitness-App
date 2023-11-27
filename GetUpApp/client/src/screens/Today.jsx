import { StyleSheet, Text, View } from "react-native";
import React from "react";

//context
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Today = () => {
  const { user } = useContext(AuthContext);
  return (
    <View>
      <Text>Today</Text>
      <Text>{user.firstname}</Text>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
