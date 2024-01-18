import { Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import BackButton from "../components/BackButton";

import { useRoute } from "@react-navigation/native";

import { fetchExerciseByBodypart } from "../utils/exerciseDB";

export default function Exercises() {
  //the below is to fetch/store info from the bodyparts data
  const route = useRoute();
  const { params } = route || {};
  const { item } = params || {};

  console.log("Item Details: ", item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExerciseByBodypart(bodypart);
    console.log("Data details: ", data);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View>
          <BackButton />
        </View>
        <View>
          <Text
            style={{
              fontSize: 28,
              letterSpacing: 2.4,
              marginRight: 20,
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 110,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 25,
    marginHorizontal: 15,
  },
});
