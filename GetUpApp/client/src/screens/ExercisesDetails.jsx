import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

import CloseButton from "../components/CloseButton";

export default function ExercisesDetails() {
  const route = useRoute();
  const { params } = route || {};
  const { item } = params || {};

  console.log("Exercise Details: ", item);

  return (
    <ScrollView
      showVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        paddingBottom: 60,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 30,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: hp(2.55),
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 15,
              width: "90%",
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <CloseButton />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderRadius: 10, marginBottom: 10 }}>
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100), borderRadius: 10 }}
        />
      </View>

      <View style={{ marginHorizontal: 15, paddingVertical: 8, marginTop: 8 }}>
        <Text
          style={{ fontSize: hp(1.9), letterSpacing: 0.5, marginVertical: 3 }}
        >
          Equipment:
          <Text style={{ fontWeight: "bold" }}>{item?.equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(1.9), letterSpacing: 0.5, marginVertical: 3 }}
        >
          Target Muscle:
          <Text style={{ fontWeight: "bold" }}>{item?.target}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(1.9), letterSpacing: 0.5, marginVertical: 3 }}
        >
          Secondary Muscles:
          <Text style={{ fontWeight: "bold" }}>{item?.secondaryMuscles}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(1.9), letterSpacing: 0.5, paddingVertical: 15 }}
        >
          Instructions
        </Text>
        <Text style={{}}>{item?.instructions}</Text>
      </View>
    </ScrollView>
  );
}
