import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import React, { useContext } from "react";

//components
import TextComponent from "../components/TextComponent";
import InputHeading from "../components/InputHeading";
import BackButton from "../components/BackButton";
import Head from "../components/Head";
import Button from "../components/Buttons";

//context functions
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser, loginInfo, updateLoginInfo, isLoginLoading, loginError } =
    useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ flex: 1, backgroundColor: "#F1D8C1" }}
    >
      <Head />
      <BackButton />

      <ScrollView>
        <View style={styles.box}>
          <TextComponent content="Log In" />

          <View style={styles.form}>
            <View>
              <InputHeading content="Email" />
              <TextInput
                style={styles.input}
                placeholder="Enter your email address"
                onChangeText={(text) =>
                  updateLoginInfo({
                    ...loginInfo,
                    email: text,
                  })
                }
              />
            </View>

            <View>
              <InputHeading content="Password" />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                onChangeText={(text) =>
                  updateLoginInfo({
                    ...loginInfo,
                    password: text,
                  })
                }
              />
            </View>

            {loginError?.error && (
              <Text style={styles.emessage}>{loginError?.message}</Text>
            )}

            <Button text="Login" onPress={loginUser} loading={isLoginLoading} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F0C9A5",
    paddingBottom: 60,
  },

  form: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 25,
    width: 307,
    height: 42,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset (x, y)
    shadowOpacity: 1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
  },

  emessage: {
    fontSize: 14,
    color: "red",
    marginBottom: 10,
  },
});
