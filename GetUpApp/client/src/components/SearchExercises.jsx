import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

//functions
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  return <View></View>;
};

export default SearchExercises;

const styles = StyleSheet.create({});
