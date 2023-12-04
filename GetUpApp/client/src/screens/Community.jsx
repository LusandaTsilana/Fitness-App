import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";

const Community = () => {
  return (
    <View>
      <AppHeader content="Community" showName={false} />
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({});
