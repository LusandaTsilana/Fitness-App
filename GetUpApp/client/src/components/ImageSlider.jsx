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
const SPACING = 20;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.imagebox,
          { backgroundColor: item.style.backgroundColor },
        ]}
      >
        <Image source={item.source} style={[styles.image, item.style]} />
      </View>
    </View>
  );
};

const ImageSlider = () => {
  const DATA = [
    {
      source: require("../../assets/fitnessmodels/yoga-girl.png"),
      style: {
        width: 95,
        height: 111,
        backgroundColor: "#F9E7D2",
        marginTop: 10,
      },
    },
    {
      source: require("../../assets/fitnessmodels/boxing-girl.png"),
      style: {
        width: 75,
        height: 121,
        backgroundColor: "#E8F9D2",
        marginTop: 5,
        marginLeft: 20,
      },
    },

    {
      source: require("../../assets/fitnessmodels/dance-girl.png"),
      style: {
        width: 101,
        height: 121,
        backgroundColor: "#F5E8B7",
        marginTop: 5,
        marginLeft: 10,
      },
    },

    {
      source: require("../../assets/fitnessmodels/abs-girl.png"),
      style: {
        width: 108,
        height: 115,
        backgroundColor: "#E4D2D2",
        marginTop: 12,
        marginLeft: 4,
      },
    },

    {
      source: require("../../assets/fitnessmodels/legs-girl.png"),
      style: {
        width: 114,
        height: 104,
        backgroundColor: "#C7DDFF",
        marginTop: 10,
      },
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
    height: 170,
    overflow: "hidden",
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagebox: {
    borderRadius: 10, // Add border radius for a rounded appearance
    height: 130,
    width: 114,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
