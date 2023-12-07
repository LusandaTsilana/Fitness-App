import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import ImageSlider from "../components/ImageSlider";
import TextComponent from "../components/TextComponent";

const Today = () => {
  return (
    <View style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
      <AppHeader content="Good day," showName={true} />
      <ScrollView style={styles.container}>
        <View>
          <TextComponent
            content="Explore"
            style={{ textAlign: "left", fontSize: 24, marginLeft: 10 }}
          />
          <ImageSlider />
        </View>
      </ScrollView>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
