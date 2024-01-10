import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
    </View>
  );
};

export default FullBody;

const styles = StyleSheet.create({});
