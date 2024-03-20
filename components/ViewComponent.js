import { Platform, View } from "react-native";
import useTheme from "../hooks/useTheme";

export const ViewComponent = ({ children, style }) => {
  const { getTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getTheme().backgroundColor,
        ...style,
      }}
    >
      {children}
    </View>
  );
};
