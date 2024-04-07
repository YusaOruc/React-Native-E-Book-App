import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useGlobalState } from "../../context/GlobalStateContext";
import { TextComponent } from "../../components/TextComponent";
import { ViewComponent } from "../../components/ViewComponent";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { isAuthenticated, handleAuthenticated } = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    handleAuthenticated();
  };

  const navigation = useNavigation();

  return (
    <ViewComponent style={styles.container}>
      <TextComponent style={styles.title}>Hello</TextComponent>
      <TextComponent style={styles.description}>
        Welcome to the E-Book
      </TextComponent>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <TextComponent style={styles.buttonText}>Log In</TextComponent>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextComponent style={styles.span}>
          Don't have an account?
        </TextComponent>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <TextComponent>Register</TextComponent>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <TouchableOpacity>
          <Ionicons name="logo-twitter" size={32} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-instagram" size={32} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-facebook" size={32} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-linkedin" size={32} color="#888" />
        </TouchableOpacity>
      </View>
    </ViewComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 24,
  },
  span: {
    marginRight: 5,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#888", // veya istediğiniz açık renk
    fontWeight: "300", // normal veya light font ağırlığı
  },
  description: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#888", // veya istediğiniz açık renk
    fontWeight: "300", // normal veya light font ağırlığı
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 16,
    paddingLeft: 16,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#F38181",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
