import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Image } from "expo-image";

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
      <TouchableOpacity style={{ paddingVertical: 3, marginBottom: 5 }}>
        <View style={{ borderRadius: 10 }}>
          <Image
            source={{ uri: item.gifUrl }}
            style={{ width: 80, height: 100 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
