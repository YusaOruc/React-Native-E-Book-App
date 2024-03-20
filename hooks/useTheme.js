// useTheme.js
import { useState } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
const useTheme = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalState();

  const getTheme = () => {
    if (isDarkMode) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

  const darkTheme = {
    topBannerColor: "#16181E",
    backgroundColor: "#1f1f1f",
    textColor: "#ffffff",
    bottomNavigation: "#16181E",
    // Diğer karanlık tema renkleri buraya eklenebilir
  };

  const lightTheme = {
    topBannerColor: "#ffffff",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    bottomNavigation: "#ffffff",
    // Diğer aydınlık tema renkleri buraya eklenebilir
  };

  return {
    getTheme,
  };
};

export default useTheme;
