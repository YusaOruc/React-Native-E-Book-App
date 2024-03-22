import React from "react";
import Middle from "../views/readBook/Middle";
import Home from "../views/Home";
import { NavigationContainer } from "@react-navigation/native";
import useTheme from "../hooks/useTheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ReadBook from "../views/readBook/ReadBook";
import Settings from "../views/settings/Settings";
import { Image, StyleSheet, Button, Text } from "react-native";
import FavoriteBooks from "../views/favorite/FavoriteBooks";
import AudioPlayer from "../views/audioPlayer/AudioPlayer";
import { createStackNavigator } from "@react-navigation/stack";
import TopBanner from "./topBanner/TopBanner";
import { TextComponent } from "./TextComponent";
import HomeTopBanner from "./topBanner/HomeTopBanner";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// Ana Navigasyon Yapınızın Dışında Stack Navigator Oluşturun
export const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          header: HomeTopBanner,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ReadBook"
        component={ReadBook}
        options={{
          header: TopBanner,
        }}
      />
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{
          header: TopBanner,
        }}
      />
      {/* İstediğiniz kadar sayfayı ekleyin */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default function BottomNavigation() {
  const { getTheme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "FavoriteBooks") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "ReadBook") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Profile") {
            return (
              <Image
                source={{ uri: "https://i.pravatar.cc/200" }}
                style={{
                  ...styles.avatar,
                  borderWidth: focused ? 2 : undefined,
                  borderColor: focused ? "#D45555" : undefined,
                }}
              />
            );
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, // Label'ı kaldır
        headerShown: false, // Ekran başlığını ve geri düğmesini gizler
        tabBarStyle: {
          backgroundColor: getTheme().bottomNavigation, // Arka plan rengi
        },
        tabBarActiveTintColor: "#F38181",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FavoriteBooks" component={FavoriteBooks} />
      <Tab.Screen name="Profile" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
