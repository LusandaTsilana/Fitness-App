import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";

const Today = () => {
  return (
    <View>
      <AppHeader content="Good day," showName={true} />
      <ScrollView style={styles.container}>
        <View style={styles.carousel}></View>
      </ScrollView>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({});
