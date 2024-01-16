import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

import { bodyParts } from "../constants/bodyParts";

export default function BodyParts() {
  return (
    <View style={{ marginHorizontal: 4 }}>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartsCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartsCard = ({ item, index }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: "flex-end",
          padding: 4,
          marginBottom: 4,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: 170,
            height: 145,
            backgroundColor: "#EAD794",
            borderRadius: 10,
          }}
        />
        {/* <LinearGradient colors={["transparent", "#EAD794"]} sty/> */}
        <Text style={{ width: 180, height: 52 }}></Text>
      </TouchableOpacity>
    </View>
  );
};
