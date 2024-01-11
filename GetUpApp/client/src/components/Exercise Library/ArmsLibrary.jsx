import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Pressable>
        <View
          style={[
            styles.imagebox,
            { backgroundColor: item.style.backgroundColor },
          ]}
        >
          <Image source={item.source} style={[styles.image, item.style]} />
        </View>

        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const ArmsLibrary = () => {
  const DATA = [
    {
      source: require("../../../assets/ExerciseGifs/neck-stretch.gif"),
      text: "Neck Stretch",
      style: {
        width: 95,
        height: 111,
        backgroundColor: "#F9E7D2",
        marginTop: 10,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/arm-stretch.gif"),
      text: "Arm Stretch",
      style: {
        width: 75,
        height: 121,
        backgroundColor: "#E8F9D2",
        marginTop: 5,
        marginLeft: 20,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/static-tricep-stretch.gif"),
      text: "Left Tricep Stretch",
      style: {
        width: 101,
        height: 121,
        backgroundColor: "#F5E8B7",
        marginTop: 5,
        marginLeft: 10,
      },
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ArmsLibrary;

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagebox: {
    borderRadius: 10,
    height: 130,
    width: 114,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
  },
});
