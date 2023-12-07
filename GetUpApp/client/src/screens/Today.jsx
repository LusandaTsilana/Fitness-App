import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import ImageSlider from "../components/ImageSlider";

const Today = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <AppHeader content="Good day," showName={true} />
      <ScrollView style={styles.container}>
        <View>
          <ImageSlider />
        </View>
      </ScrollView>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
