import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const signOutUser = async () => {
    try {
      await signOut(auth)
        .then(() => {
          console.log("signed out");
          navigation.navigate("home");
        })
        .catch((error) => {
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("error sign out ", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button onPress={signOutUser}>Sign Out</Button>
      <Button
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        Go to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
