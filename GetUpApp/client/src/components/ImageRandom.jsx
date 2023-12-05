import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageRandom = () => {
  const [images, setImages] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=5l9h_GhQf-kDJACFyATTW_AUqOuiuP7XUCAEEqTBLw8"
    );
    console.log(response.data);
    const data = await response.data;
    setImages(data);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={fetchAPI}>
        <Text>Click</Text>
      </Pressable>

      <View style={styles.image}>{images.length > 0 && ()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 100,
    paddingVertical: 20,
  },
});
export default ImageRandom;
