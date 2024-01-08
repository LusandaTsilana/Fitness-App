import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

//components
import AppHeader from "../components/AppHeader";
import { ChatContext } from "../context/ChatContext";

const Community = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return (
    <View>
      <AppHeader content="Chat" showName={false} showLogout={false} />

      <View style={styles.container}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Community;
