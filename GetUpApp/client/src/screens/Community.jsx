import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

//components
import AppHeader from "../components/AppHeader";
import UserChat from "../components/Chat/UserChat";

//context files
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Community = () => {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return (
    <View style={{ backgroundColor: "white" }}>
      <AppHeader content="Chat" showName={false} showLogout={false} />

      <View style={styles.container}>
        {userChats?.length < 1 ? null : (
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text style={styles.box}>
                {isUserChatsLoading && <Text>Loading chats...</Text>}
                {userChats?.map((chat, index) => {
                  return (
                    <View key={index}>
                      <Pressable onPress={() => navigation.navigate("ChatBox")}>
                        <UserChat chat={chat} user={user} />
                      </Pressable>
                    </View>
                  );
                })}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  box: {
    marginHorizontal: 20,
    height: "85vh",
  },
});

export default Community;
