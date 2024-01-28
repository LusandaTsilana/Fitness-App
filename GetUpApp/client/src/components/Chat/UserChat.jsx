import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";

const UserChat = ({chat, user}) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.area}>A</View>
          <View style={styles.textContent}>
            <View style={styles.name}>{recipientUser?.firstname}</View>
          <View style={styles.textMessage}><Text>Text Message</Text></View>
          </View>
        </View>

        <View style={styles.view}>
          <View style={styles.date}>29/01/2024</View>
          <View style={styles.userNotifications}>2</View>
        </View>
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
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
  },

  area: {
    marginRight: 10
  },

  box: {
    flexDirection: "row"
  },

  name:{
    paddingBottom: 10
  },

  view: {
    flexDirection: "column",
    alignItems: "flex-end"

  },
  userNotifications:{
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: "#FACB95"
  }
});

export default UserChat;
