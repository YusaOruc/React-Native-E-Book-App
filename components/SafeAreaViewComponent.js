import { StyleSheet, Platform, SafeAreaView } from "react-native";
import useTheme from "../hooks/useTheme";

export const SafeAreaViewComponent = ({ children }) => {
  const { getTheme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: getTheme().backgroundColor,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
