import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);

  console.log("pChats", potentialChats);

  return (
    <View>
      {potentialChats &&
        potentialChats.map((u, index) => {
          return (
            <View key={index} onPress={() => createChat(user._id, u.id)}>
              <Text>{u.firstname}</Text>
              <Text style={{ color: "green" }}>Online</Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PotentialChats;
