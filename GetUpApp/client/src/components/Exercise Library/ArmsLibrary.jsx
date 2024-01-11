import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

const renderItem = ({ item }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.card}>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View
          style={[
            styles.imagebox,
            { backgroundColor: item.style.backgroundColor },
          ]}
        >
          <Pressable>
            <Image source={item.source} style={[styles.image, item.style]} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const ArmsLibrary = () => {
  const DATA = [
    {
      source: require("../../../assets/ExerciseGifs/neck-stretch.gif"),
      text: "Neck Stretch",
      style: {
        width: 148.29,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/arm-stretch.gif"),
      text: "Arm Stretch",
      style: {
        width: 138.73,
        height: 124,
        marginLeft: 20,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/tricep-stretch.gif"),
      text: "Left Tricep Stretch",
      style: {
        width: 101,
        height: 121,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/tricep-stretch.gif"),
      text: "Right Tricep Stretch",
      style: {
        width: 101,
        height: 121,
        transform: [{ scaleX: -1 }],
      },
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      vertical={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ArmsLibrary;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 128,
    backgroundColor: "#F9E7D2",
    marginVertical: 10,
    borderRadius: 10,
  },

  image: {
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },

  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
