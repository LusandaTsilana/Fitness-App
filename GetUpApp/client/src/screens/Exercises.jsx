import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";

import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { fetchExerciseByBodypart } from "../utils/exerciseDB";

//components
import BackButton from "../components/BackButton";
import ExercisesList from "../components/ExercisesList";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

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
    setExercises(data);
    // console.log("ExercisesDetails: ", data);
  };

  return (
    <ScrollView style={{ backgroundColor: "white", paddingBottom: 100 }}>
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
                fontWeight: "bold",
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </View>

      {/* exercises list */}
      <ScrollView style={{ marginHorizontal: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <ExercisesList data={exercises} />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FACB95",
    height: 150,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 25,
    marginHorizontal: 15,
  },
});
