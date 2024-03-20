import Middle from "../views/readBook/Middle";
import Home from "../views/Home";
import { NavigationContainer } from "@react-navigation/native";
import useTheme from "../hooks/useTheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import Liste from "../views/readBook/ReadBook";
import KitapOkumaUygulamasi from "../views/settings/Settings";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PagesNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Liste" component={Liste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
