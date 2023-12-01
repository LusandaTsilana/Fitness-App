import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

//context hook
import { AuthContext } from "../context/AuthContext";

const AppHeader = ({ style, content, showName }) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={[styles.heading, style]}>{content}</Text>
        {showName && <Text style={styles.name}>{user.firstname}</Text>}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    marginVertical: 25,
    marginHorizontal: 30,
  },

  heading: {
    textAlign: "left",
    fontSize: 32,
    letterSpacing: 2.4,
  },

  name: {
    textAlign: "left",
    fontSize: 32,
    letterSpacing: 2.4,
  },
});
