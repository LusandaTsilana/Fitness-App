import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";

const UserChat = (chat, user) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
});

export default UserChat;
