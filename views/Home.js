import { TextComponent } from "../components/TextComponent";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import BookList from "./home/BookList";
import { ViewComponent } from "../components/ViewComponent";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const scrollViewRef = useRef(null);
  const [showToTopButton, setShowToTopButton] = useState(false);
  const navigation = useNavigation();
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 0) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <ViewComponent>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ViewComponent style={styles.container}>
          <TextComponent>Mystery and Detective</TextComponent>
          <BookList navigation={navigation} />
        </ViewComponent>
        <ViewComponent style={styles.container}>
          <TextComponent>Fantasy</TextComponent>
          <BookList navigation={navigation} />
        </ViewComponent>
        <ViewComponent style={styles.container}>
          <TextComponent>Classic Literature</TextComponent>
          <BookList navigation={navigation} />
        </ViewComponent>
      </ScrollView>
      {showToTopButton && (
        <TouchableOpacity style={styles.button}>
          <Ionicons
            onPress={() => handleScrollToTop()}
            name="arrow-up-circle"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      )}
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  container2: {
    flex: 1,
    padding: 10,
    borderColor: "red",
    borderWidth: 2,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#16181E",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
