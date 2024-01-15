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
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.card}>
        <View style={{ marginLeft: 10 }}>
          <View style={{ width: 150 }}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
        <View
          style={[
            styles.imagebox,
            { backgroundColor: item.style.backgroundColor },
          ]}
        >
          <Pressable>
            <Image
              source={item.source}
              style={[styles.image, item.style]}
              cache={"force-cache"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const ArmsLibrary = () => {
  const DATA = [
    {
      source: require("../../../assets/ExerciseGifs/NeckRoll.gif"),
      text: "Neck Stretch",
      duration: "Time: 10s",
      style: {
        width: 148.29,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/ArmSwing.gif"),
      text: "Arm Stretch",
      duration: "Time: 20s",
      style: {
        width: 138.73,
        height: 124,
        marginLeft: 20,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/static-tricep-stretch.gif"),
      text: "Left Tricep Stretch",
      duration: "Time: 10s",
      style: {
        width: 101,
        height: 121,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/static-tricep-stretch.gif"),
      text: "Right Tricep Stretch",
      duration: "Time: 10s",
      style: {
        width: 101,
        height: 121,
        transform: [{ scaleX: -1 }],
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/TricepDip.gif"),
      text: "Tricep Dips",
      duration: "x 25",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/Push-Up.gif"),
      text: "Push Ups",
      duration: "x 20",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/air-box.gif"),
      text: "Air Punches",
      duration: "Time: 30s",
      style: {
        width: 138,
        height: 124,
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
    borderRadius: 10,
    marginRight: 10,
  },

  text: {
    textAlign: "left",
    fontSize: 18,
  },

  duration: {
    fontSize: 13,
    marginTop: 10,
    color: "#226FE3",
  },
});
