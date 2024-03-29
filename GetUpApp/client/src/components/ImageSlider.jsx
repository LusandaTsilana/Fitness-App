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

const ImageSlider = () => {
  const DATA = [
    {
      source: require("../../assets/fitnessmodels/yoga-girl.png"),
      text: "Yoga",
      style: {
        width: 95,
        height: 111,
        backgroundColor: "#F9E7D2",
        marginTop: 10,
      },
    },
    {
      source: require("../../assets/fitnessmodels/boxing-girl.png"),
      text: "Boxing",
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
      text: "Dance",
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
      text: "Abs",
      style: {
        width: 105,
        height: 109,
        backgroundColor: "#E4D2D2",
        marginTop: 12,
        marginLeft: 7.5,
      },
    },

    {
      source: require("../../assets/fitnessmodels/legs-girl.png"),
      text: "Legs",
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
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 180,
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
