import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageRandom = () => {
  const accessKey = "5l9h_GhQf-kDJACFyATTW_AUqOuiuP7XUCAEEqTBLw8";
  const collectionID = "huHvlEz1eWg";

  const getImagesFromApi = () => {
    return fetch(
      `https://api.unsplash.com/collections/${collectionID}/photos/?client_id=${accessKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getImagesFromApi();
};
const styles = StyleSheet.create({});
export default ImageRandom;
