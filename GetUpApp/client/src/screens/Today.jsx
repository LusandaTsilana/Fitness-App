import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import ImageSlider from "../components/ImageSlider";

const Today = () => {
  return (
    <View>
      <AppHeader content="Good day," showName={true} />
      <View style={styles.container}>
        <View>
          <ImageSlider />
        </View>
      </View>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
