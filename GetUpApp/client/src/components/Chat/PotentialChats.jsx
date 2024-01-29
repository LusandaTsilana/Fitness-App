import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const PotentialChats = () => {
  const { potentialChats } = useContext(ChatContext);
  console.log("PotentialChats: ", potentialChats);

  return (
    <View>
      <Text>New Message</Text>
    </View>
  );
};

export default PotentialChats;

const styles = StyleSheet.create({});
