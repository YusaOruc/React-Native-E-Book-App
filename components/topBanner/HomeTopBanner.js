import React from "react";
import {
  View,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useGlobalState } from "../../context/GlobalStateContext";
import useTheme from "../../hooks/useTheme";

const HomeTopBanner = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalState();
  const { getTheme } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: getTheme().backgroundColor,
      }}
    >
      <View style={styles.darkModeContainer}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Image
            source={
              isDarkMode
                ? require("../../assets/sun.png")
                : require("../../assets/moon.png")
            }
            style={styles.darkModeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 35,
    padding: 10,
    marginTop: -25,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // Üst banner arkaplan rengi
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  darkModeIcon: {
    width: 24,
    height: 24,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  handle: {
    backgroundColor: "gray",
    height: 4,
    width: 50,
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 2,
  },
  content: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeTopBanner;
