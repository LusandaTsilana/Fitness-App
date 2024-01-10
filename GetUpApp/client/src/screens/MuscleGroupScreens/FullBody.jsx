import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";

const FullBody = () => {
  return (
    <View>
      <AppHeader
        content="Full Body"
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

export default FullBody;

const styles = StyleSheet.create({});
