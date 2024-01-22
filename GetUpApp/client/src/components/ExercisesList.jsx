import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

export default function ExercisesList({ data }) {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
          paddingTop: 20,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard navigation={navigation} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, navigation, index }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ paddingVertical: 3, marginBottom: 5 }}
        onPress={() => navigation.navigate("ExercisesDetails", { item })}
      >
        <View style={{ borderRadius: 10 }}>
          <Image
            source={{ uri: item.gifUrl }}
            style={{ width: 120, height: 120 }}
            onError={(error) => console.error("Image loading error:", error)}
          />
        </View>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          {item?.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
