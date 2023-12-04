import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import AppHeader from "../components/AppHeader";

const Profile = () => {
  return (
    <View>
      <AppHeader content="Workout" showName={false} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
