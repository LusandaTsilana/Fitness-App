import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";

//components
import ExercisesHeader from "../../components/ExercisesHeader";
import TextComponent from "../../components/TextComponent";
import Button from "../../components/Buttons";
import { ArmsDB } from "../../constants/bodyParts";

const Boxing = () => {
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
            <Image
              source={item.source}
              style={[styles.image, item.style]}
              cache={"force-cache"}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{ marginBottom: 100, backgroundColor: "white" }}>
      <View>
        <ExercisesHeader content="Boxing" />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button text="Start" />
        </View>
        <TextComponent
          content="Exercises"
          style={{ textAlign: "left", fontSize: 20, marginLeft: 15 }}
        />

        <View style={styles.exercises}>
          <View>
            <FlatList
              data={ArmsDB}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              vertical={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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

export default Boxing;
