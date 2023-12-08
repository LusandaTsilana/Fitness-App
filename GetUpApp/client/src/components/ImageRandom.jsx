import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageRandom = () => {
  const accessKey = "";

  const getImagesFromApi = () => {
    return fetch("")
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
const styles = StyleSheet.create({});
export default ImageRandom;
