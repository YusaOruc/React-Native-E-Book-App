import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { TextComponent } from "../../components/TextComponent";
import { ViewComponent } from "../../components/ViewComponent";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "../../components/ProgressBar";

const AudioPlayer = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      require("../../assets/muzik.mp3"),
      { shouldPlay: isPlaying }
    );
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setDurationMillis(status.durationMillis);
  };

  const onPlaybackStatusUpdate = (status) => {
    setPositionMillis(status.positionMillis);
  };

  const toggleSound = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const skipBackward = async () => {
    const newPosition = Math.max(0, positionMillis - 10000); // 10 saniye geri al
    await sound.setPositionAsync(newPosition);
  };

  const skipForward = async () => {
    const newPosition = Math.min(
      durationMillis,
      positionMillis + 10000 // 10 saniye ileri al
    );
    await sound.setPositionAsync(newPosition);
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
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View
            style={{
              width: `${(positionMillis / durationMillis) * 100}%`,
              backgroundColor: "#D45555",
              height: 5,
            }}
          />
        </View>
      </View>
      <ProgressBar progress={`${(positionMillis / durationMillis) * 100}%`} />
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={skipBackward}>
          <Ionicons name="play-back-circle" size={40} color="#D45555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSound}>
          <Ionicons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={50}
            color={"#D45555"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipForward}>
          <Ionicons name="play-forward-circle" size={40} color="#D45555" />
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
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarContainer: {
    width: "80%",
    backgroundColor: "#DDD",
    height: 5,
    alignSelf: "center",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#DDD",
    height: 5,
  },
  span: {
    fontSize: 10,
    color: "#888", // or any desired light color
    fontWeight: "300", // normal or light font weight
  },
});
