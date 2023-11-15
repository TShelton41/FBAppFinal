import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, List, ActivityIndicator } from "react-native-paper";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [signInUserName, setSignInUserName] = useState();
  const [signInUserPW, setSignInUserPW] = useState();
  const [createUserFName, setCreateUserFName] = useState();
  const [createUserLName, setCreateUserLName] = useState();
  const [createUserName, setCreateUserName] = useState();
  const [createUserPW, setCreateUserPW] = useState();
  const [loading, setLoading] = useState(false);

  const signInUser = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        signInUserName,
        signInUserPW
      )
        .then((userCredential) => {
          console.log("user signed in ", userCredential);
          setSignInUserName("");
          setSignInUserPW("");
          setLoading(false);
          navigation.navigate("login");
        })
        .catch((error) => {
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("error ", error.message);
    }
  };

  const createUser = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        createUserName,
        createUserPW
      )
        .then((userCredential) => {
          console.log("user created ", userCredential);
          setCreateUserFName("");
          setCreateUserLName("");
          setCreateUserName("");
          setCreateUserPW("");
          setLoading(false);
          navigation.navigate("login");
        })
        .catch((error) => {
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("error ", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Sign In</Text>
        <TextInput
          style={styles.inputs}
          label="User Name"
          onChangeText={setSignInUserName}
          value={signInUserName}
        />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          label="Password"
          onChangeText={setSignInUserPW}
          value={signInUserPW}
        />
        <Button onPress={signInUser} style={styles.button} mode="contained">
          Sign In
        </Button>
      </View>

      <View>
        <Text style={styles.header}>Create Account</Text>
        <TextInput
          onChangeText={setCreateUserFName}
          style={styles.inputs}
          label="First Name:"
          value={createUserFName}
        />
        <TextInput
          onChangeText={setCreateUserLName}
          style={styles.inputs}
          label="Last Name:"
          value={createUserLName}
        />
        <TextInput
          onChangeText={setCreateUserName}
          style={styles.inputs}
          label="User Name:"
          value={createUserName}
        />
        <TextInput
          onChangeText={setCreateUserPW}
          style={styles.inputs}
          secureTextEntry={true}
          label="Password:"
          value={createUserPW}
        />
        <Button onPress={createUser} style={styles.button} mode="contained">
          Sign In
        </Button>
      </View>
      <Text>ComponentName</Text>
      <Button
        style={styles.button}
        title="Go to Login"
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        {" "}
        Go To Login
      </Button>
      <View style={[styles.activityContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" animating={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
  },
  activityContainer: {
    justifyContent: "center",
  },
  horizontal: {},
  header: {
    fontSize: 24,
  },
  inputs: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});
