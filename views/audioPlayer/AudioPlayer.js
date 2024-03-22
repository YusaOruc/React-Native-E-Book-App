import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { TextComponent } from "../../components/TextComponent";
import { ViewComponent } from "../../components/ViewComponent";
import { Ionicons } from "@expo/vector-icons";

const AudioPlayer = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/muzik.mp3")
    );
    setSound(sound);
  };

  const toggleSound = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <ViewComponent>
      <View style={styles.card}>
        <Image
          source={require("../../assets/bookIcons/d.png")}
          style={styles.avatar}
        />
        <TextComponent>"Pride and Prejudice"</TextComponent>
        <TextComponent style={styles.span}>"Jane Austen"</TextComponent>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={toggleSound}>
          <Ionicons
            name={isPlaying ? "stop-circle" : "play-circle"}
            size={50}
            color={"#D45555"}
          />
        </TouchableOpacity>
      </View>
    </ViewComponent>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  avatar: {
    width: "80%",
    height: "90%",
    marginBottom: 3,
    borderRadius: 20,
  },
  card: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  span: {
    fontSize: 10,
    color: "#888", // or any desired light color
    fontWeight: "300", // normal or light font weight
  },
});
