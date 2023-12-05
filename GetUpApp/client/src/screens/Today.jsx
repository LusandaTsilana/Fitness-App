import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import ImageRandom from "../components/ImageRandom";

const Today = () => {
  return (
    <View>
      <AppHeader content="Good day," showName={true} />
      <ScrollView>
        <ImageRandom />
      </ScrollView>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
