import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";

const ArmShoulders = () => {
  return (
    <View>
      <AppHeader
        content="Arms & Shoulders"
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

export default ArmShoulders;

const styles = StyleSheet.create({});
