import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";
import ImageSlider from "../components/ImageSlider";
import TextComponent from "../components/TextComponent";
import ImageRandom from "../components/ImageRandom";

const Today = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        paddingHorizontal: 10,
        flex: 1,
        paddingBottom: 100
        
      }}
    >
      <AppHeader content="Good day," showName={true} showLogout={false} />
      <ScrollView style={styles.container}>
        <View>
          <ImageRandom />
        </View>
        <View>
          <TextComponent
            content="Explore"
            style={{ textAlign: "left", fontSize: 24, marginLeft: 15 }}
          />
          <ImageSlider />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
