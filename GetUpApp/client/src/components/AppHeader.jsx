import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext } from "react";

//context hook
import { AuthContext } from "../context/AuthContext";

//components
import Button from "../components/Buttons";

const AppHeader = ({ style, content, showName, showLogout }) => {
  const { user, logoutUser } = useContext(AuthContext);

  const showAlert = () => {
    Alert.alert("Logging out", "Are you sure?", [
      {
        text: "Log out",
        onPress: logoutUser,
      },
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={[styles.heading, style]}>{content}</Text>
          {showName && <Text style={styles.name}>{user.firstname}</Text>}
        </View>
        <View style={styles.right}>
          {showLogout && (
            <Button
              onPress={showAlert}
              text="Logout"
              style={{ width: 85 }}
              styleS={{ fontSize: 15, marginVertical: 10 }}
            />
          )}
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
    height: 136,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 15,
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
