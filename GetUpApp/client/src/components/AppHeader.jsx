import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

//context hook
import { AuthContext } from "../context/AuthContext";

//components
import Button from "../components/Buttons";

const AppHeader = ({ style, content, showName }) => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={[styles.heading, style]}>{content}</Text>
          {showName && <Text style={styles.name}>{user.firstname}</Text>}
        </View>
        <View style={styles.right}>
          <Button
            onPress={logoutUser}
            text="Logout"
            style={{ width: 85 }}
            styleS={{ fontSize: 15, marginVertical: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 30,
  },

  left: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  right: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  heading: {
    fontSize: 32,
    letterSpacing: 2.4,
  },

  name: {
    fontSize: 32,
    letterSpacing: 2.4,
  },
});
