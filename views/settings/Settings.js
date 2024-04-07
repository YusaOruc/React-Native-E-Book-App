import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { SafeAreaViewComponent } from "../../components/SafeAreaViewComponent";
import { TextComponent } from "../../components/TextComponent";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalState } from "../../context/GlobalStateContext";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
];

export default function Settings() {
  const { isDarkMode, toggleDarkMode, isAuthenticated, handleAuthenticated } =
    useGlobalState();

  const logOut = () => {
    handleAuthenticated();
  };
  return (
    <SafeAreaViewComponent style={styles.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/200" }}
          style={{
            ...styles.avatar,
            borderWidth: 2,
            borderColor: "#D45555",
          }}
        />
        <TextComponent style={styles.title}>Jhon Doe</TextComponent>
      </View>
      <SectionList
        style={styles.section}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Ionicons
              name={"settings"}
              size={24}
              style={{ marginRight: 10 }}
              color={isDarkMode ? "white" : "black"}
            />
            <TextComponent style={styles.title}>{item}</TextComponent>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TextComponent style={styles.header}>{title}</TextComponent>
        )}
      />
      <View style={styles.item}>
        <TouchableOpacity
          onPress={logOut}
          style={{
            alignItems: "center",
          }}
        >
          <TextComponent style={styles.title}>Exit</TextComponent>
        </TouchableOpacity>
      </View>
    </SafeAreaViewComponent>
  );
}
const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  section: { padding: 15 },
  item: {
    padding: 15,
    marginVertical: 2,
    flexDirection: "row",
  },
  header: {
    fontSize: 12,
  },
  title: {
    fontSize: 18,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
