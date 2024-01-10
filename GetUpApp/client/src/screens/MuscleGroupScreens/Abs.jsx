import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";

const Abs = () => {
  return (
    <View>
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
      <View>
        <BackButton />
      </View>
    </View>
  );
};

export default Abs;

const styles = StyleSheet.create({});
