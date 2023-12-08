import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";

const Profile = () => {
  return (
    <View>
      <AppHeader content="Profile" showName={false} showLogout={true} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
