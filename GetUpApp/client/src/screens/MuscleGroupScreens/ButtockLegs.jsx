import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";

const ButtockLegs = () => {
  return (
    <View>
      <AppHeader
        content="Buttock & Legs"
        showName={false}
        showLogout={false}
        style={{
          fontSize: 20,
        }}
      />
      <BackButton />
    </View>
  );
};

export default ButtockLegs;

const styles = StyleSheet.create({});
