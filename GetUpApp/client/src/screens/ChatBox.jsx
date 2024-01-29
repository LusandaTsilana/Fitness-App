import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

//components
import BackButton from "../components/BackButton";

import { useFetchRecipientUser } from "../hooks/useFetchRecipientUser";

const ChatBox = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.chatboxHeader}>
        <View>
          <BackButton />
        </View>

        <View style={styles.name}>
          <Text>{recipientUser?.firstname}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chatboxHeader: {
    flexDirection: "row",
    justifyContent: "center",
  },

  name: {
    paddingBottom: 10,
    fontSize: 20,
  },
});

export default ChatBox;
