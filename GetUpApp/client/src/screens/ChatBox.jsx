import React from "react";
import { Text, View } from "react-native";

//components

import BackButton from "../components/BackButton";

const ChatBox = () => {
  return (
    <View>
      {" "}
      <BackButton />
      <Text>ChatBox</Text>
    </View>
  );
};

export default ChatBox;
