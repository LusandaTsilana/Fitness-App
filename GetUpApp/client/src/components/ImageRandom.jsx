import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageRandom = () => {
  const accessKey = "5l9h_GhQf-kDJACFyATTW_AUqOuiuP7XUCAEEqTBLw8";
  const collectionID = "2PaSlEitX-o";
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const getImagesFromApi = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/collections/${collectionID}/photos/?client_id=${accessKey}`
        );
        const data = await response.json();
        const randomImage = data[Math.floor(Math.random() * data.length)];
        setRandomImage(randomImage);
      } catch (error) {
        console.error(error);
      }
    };

    getImagesFromApi();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <View style={styles.container}>
      {randomImage && (
        <Image
          source={{ uri: randomImage.urls.regular }}
          style={styles.image}
          accessibilityLabel="random-image"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 325,
    resizeMode: "cover",
    borderRadius: 3,
  },
});

export default ImageRandom;
