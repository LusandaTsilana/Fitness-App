import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);

  console.log("pChats", potentialChats);

  return (
    <View>
      <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 20 }}>
        Potential Chats
      </Text>
      <View style={styles.container}>
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <View key={index}>
                <Pressable onPress={() => createChat(user._id, u._id)}>
                  <Text>{u.firstname}</Text>
                  <Text style={{ color: "green" }}>Online</Text>
                </Pressable>
              </View>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 25,
  },
});

export default PotentialChats;
