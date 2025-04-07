"use client";

import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "light"; // Default to light theme
  });
};
