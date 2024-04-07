// src/context/GlobalStateContext.js
import React, { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Dark mode'un açılması/kapanmasıyla ilgili gerekli işlemleri burada gerçekleştirebilirsiniz
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
    // State to track authentication
  };

  return (
    <GlobalStateContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        isAuthenticated,
        handleAuthenticated,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
