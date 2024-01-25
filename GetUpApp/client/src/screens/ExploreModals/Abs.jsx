import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";

//components
import ExercisesHeader from "../../components/ExercisesHeader";
import TextComponent from "../../components/TextComponent";
import Button from "../../components/Buttons";
import { AbsDB } from "../../constants/bodyParts";

const Abs = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View
          style={[
            styles.imagebox,
            { backgroundColor: item.style.backgroundColor },
          ]}
        >
          <Image source={item.source} style={[styles.image, item.style]} />
        </View>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={{ marginBottom: 100, backgroundColor: "white" }}>
      <View>
        <ExercisesHeader content="Abs" />
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
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Abs;

const styles = StyleSheet.create({});
