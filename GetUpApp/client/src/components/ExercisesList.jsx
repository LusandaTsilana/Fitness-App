import { Text, View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function ExercisesList({ data }) {
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
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        renderItem={({ item, index }) => (
          <ExerciseCard navigation={navigation} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ navigation, index, item }) => {
  return (
    <View>
      <Text>Exercise Card</Text>
    </View>
  );
};

export default ExerciseCard;
