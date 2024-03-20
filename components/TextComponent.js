import { Text } from "react-native";
import useTheme from "../hooks/useTheme";

export const TextComponent = ({ children, style }) => {
  const { getTheme } = useTheme();
  return (
    <Text
      style={{
        color: getTheme().textColor,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
