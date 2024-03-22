import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <View
          style={{
            width: progress,
            backgroundColor: "#D45555",
            height: 2,
          }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    backgroundColor: "#DDD",
    height: 2,
    alignSelf: "center",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#DDD",
    height: 2,
  },
});
