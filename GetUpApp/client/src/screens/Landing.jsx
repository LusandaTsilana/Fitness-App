import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//components
import Head from "../components/Head";
import Button from "../components/Buttons";

const navigation = useNavigation();

const Landing = () => {
  return (
    <View style={styles.container}>
      <Head />
      <Image style={styles.image} source={RunGirl} />
      <Text style={styles.slogan}>Embrace Your Power</Text>
      <Text style={styles.phrase}>Maximize your fitness potential</Text>

      <View style={styles.buttons}>
        <Button text="Login" onPress={() => navigation.navigate("Login")} />
        <Button text="Signup" onPress={() => navigation.navigate("Signup")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
  },
  image: {
    width: 393,
    height: 490,
  },
  slogan: {
    fontSize: 32,
    marginTop: 20,
  },
  phrase: {
    fontSize: 16,
    marginTop: 13,
  },

  buttons: {
    flexDirection: "row",
    marginTop: 15,
  },
});

export default Landing;
