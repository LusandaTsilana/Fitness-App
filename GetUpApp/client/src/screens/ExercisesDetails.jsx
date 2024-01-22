import { Text, TouchableOpacity, View } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <TouchableOpacity>
          <CloseButton />
        </TouchableOpacity>
      </View>

      <View style={{ borderRadius: 10 }}>
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100), borderRadius: 10 }}
        />
      </View>
    </View>
  );
}
