import { FlatList, Text, Pressable, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { bodyParts } from "../constants/bodyParts";

export default function BodyParts() {
  const navigation = useNavigation();

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
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        renderItem={({ item, index }) => (
          <BodyPartsCard navigation={navigation} index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartsCard = ({ item, navigation, index }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Exercises", { item })}
        style={{
          justifyContent: "center",
          padding: 4,
          marginBottom: 10,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: 170,
            height: 160,
            backgroundColor: "#F9E7D2",
            borderRadius: 10,
          }}
        />
        {/* <LinearGradient colors={["transparent", "#EAD794"]} sty/> */}
        <Text
          style={{
            width: 170,
            height: 25,
            textAlign: "center",
            fontSize: 15,
            marginTop: 2,
          }}
        >
          {item.text}
        </Text>
      </Pressable>
    </View>
  );
};
