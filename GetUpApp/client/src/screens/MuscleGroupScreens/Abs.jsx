import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Abs = () => {
  return (
    <View>
      <AppHeader
        content="Abs"
        showName={false}
        showLogout={false}
        style={{
          fontSize: 20,
        }}
      />
    </View>
  );
};

export default Abs;

const styles = StyleSheet.create({});
