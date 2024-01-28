import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

//components
import AppHeader from "../components/AppHeader";
import UserChat from "../components/Chat/UserChat";
import ChatBox from "../screens/ChatBox"

//context files
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Community = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return (
    <View style={{backgroundColor: "white"}}>
      <AppHeader content="Chat" showName={false} showLogout={false} />

      <View style={styles.container}>
        {userChats?.length < 1 ? null : (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={styles.box}>
                {isUserChatsLoading && <Text>Loading chats...</Text>}
                {userChats?.map((chat, index) => {
                  return (
                    <View key={index}>
                      <UserChat chat={chat} user={user} />
                    </View>
                  );
                })}
              </Text>
              <Text style={styles.box}><ChatBox/></Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 20,
    height: "85vh",
    width: "90vh",
  },
});

export default Community;
