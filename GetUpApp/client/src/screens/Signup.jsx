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
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);

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
          <TextComponent content="Sign Up" />

          <View style={styles.form}>
            <View>
              <InputHeading content="First Name" />
              <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    firstname: e.target.value,
                  })
                }
              />
            </View>

            <View>
              <InputHeading content="Last Name" />
              <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    lastname: e.target.value,
                  })
                }
              />
            </View>

            <View>
              <InputHeading content="Email" />
              <TextInput
                style={styles.input}
                placeholder="Enter your email address"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    email: e.target.value,
                  })
                }
              />
            </View>

            <View>
              <InputHeading content="Password" />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
            </View>

            <Button text="Sign Up" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
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
    marginBottom: 30,
    width: 307,
    height: 42,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset (x, y)
    shadowOpacity: 1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
  },
});

export default Signup;
