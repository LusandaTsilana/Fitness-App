import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = 130;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.source} style={styles.image} />
    </View>
  );
};

const ImageSlider = () => {
  const DATA = [
    {
      source: require("../../assets/fitnessmodels/yoga-girl.png"),
      style: { width: 95, height: 111 },
    },
    {
      source: require("../../assets/fitnessmodels/boxing-girl.png"),
      style: { width: 75, height: 121 },
    },

    {
      source: require("../../assets/fitnessmodels/dance-girl.png"),
      style: { width: 101, height: 121 },
    },

    {
      source: require("../../assets/fitnessmodels/abs-girl.png"),
      style: { width: 109, height: 105 },
    },

    {
      source: require("../../assets/fitnessmodels/legs-girl.png"),
      style: { width: 114, height: 104 },
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 180,
    overflow: "hidden",
  },
});
