import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";

//profile avatar
import Avatar from "../../../assets/undraw_Profile_pic_re_iwgo.png";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <View style={{ paddingHorizontal: 40 }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.area}>
            <Image source={Avatar} style={{ width: 50, height: 50 }} />
          </View>
          <View style={styles.textContent}>
            <View style={styles.name}>
              <Text>{recipientUser?.firstname}</Text>
            </View>
            <View style={styles.textMessage}>
              <Text>Text Message</Text>
            </View>
          </View>
        </View>

        <View style={styles.view}>
          <View style={styles.date}>
            <Text>29/01/2024</Text>
          </View>
          <View style={styles.userNotifications}>
            <Text>2</Text>
          </View>
          <View style={styles.userOnline}>
            <Text>Online</Text>
          </View>
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
    marginRight: 10,
  },

  box: {
    flexDirection: "row",
    width: "100%",
  },

  name: {
    paddingBottom: 10,
  },

  view: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  userNotifications: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: "#FACB95",
  },

  userOnline: {
    color: "green",
    marginTop: 10,
  },
});

export default UserChat;
