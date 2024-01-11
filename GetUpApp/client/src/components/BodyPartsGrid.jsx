import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//images
import ArmsShoulders from "../../assets/fitnessmodels/amrsshoulders.png";
import Buttock from "../../assets/fitnessmodels/buttock.png";
import Abs from "../../assets/fitnessmodels/abss.png";
import FullBody from "../../assets/fitnessmodels/fullbody.png";

const BodyPartsGrid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <View style={styles.leftbox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MuscleGroupNavigator", {
                screen: "ArmShoulders",
              })
            }
          >
            <Image style={{ width: 150, height: 132 }} source={ArmsShoulders} />
            <Text style={styles.title}>Arms</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightbox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MuscleGroupNavigator", {
                screen: "Abs",
              })
            }
          >
            <Image
              style={{ width: 150, height: 132, borderRadius: 10 }}
              source={Abs}
            />
            <Text style={styles.title}>Abs</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.leftbox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MuscleGroupNavigator", {
                screen: "ButtockLegs",
              })
            }
          >
            <Image
              style={{ width: 150, height: 133, borderRadius: 10 }}
              source={Buttock}
            />
            <Text style={styles.title}>Buttock & Legs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightbox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MuscleGroupNavigator", {
                screen: "FullBody",
              })
            }
          >
            <Image
              style={{ width: 76, height: 132, marginLeft: 40 }}
              source={FullBody}
            />
            <Text style={styles.title}>Full Body</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 20,
  },
  leftbox: {
    marginRight: 10,
    backgroundColor: "#EAD794",
    width: 150,
    height: 133,
    borderRadius: 10,
  },
  rightbox: {
    marginLeft: 10,
    backgroundColor: "#EAD794",
    width: 150,
    height: 133,
    borderRadius: 10,
  },

  title: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default BodyPartsGrid;
