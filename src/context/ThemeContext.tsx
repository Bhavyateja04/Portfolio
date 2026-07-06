"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeName = "Lavender" | "Peach" | "Pink" | "Blue" | "Cream";

export interface ThemePalette {
  lavender: string;
  peach: string;
  pink: string;
  blue: string;
  cream: string;
  lilac: string;
  sage: string;
  yellowDoodle: string;
  background: string;
}

export const themes: Record<ThemeName, ThemePalette> = {
  Lavender: {
    lavender: "#CDB8FF",
    peach: "#FFDFD3",
    pink: "#FFB7B2",
    blue: "#B3C5FF",
    cream: "#FFFDF6",
    lilac: "#E4DAFF",
    sage: "#E8F0E6",
    yellowDoodle: "#FFF275",
    background: "#FFFDF6",
  },
  Peach: {
    lavender: "#FF9E7A", // Warm Coral Accent
    peach: "#FFEBE3",    // Peach Tint
    pink: "#FFB085",     // Apricot highlight
    blue: "#FCD3A1",     // Soft Gold
    cream: "#FFF9F5",    // Warm Cream
    lilac: "#FFDFD3",    // Pale Peach
    sage: "#F5E0C3",     // Sand Sage
    yellowDoodle: "#FFE79A",
    background: "#FFF9F5",
  },
  Pink: {
    lavender: "#FF94B8", // Blossom Pink
    peach: "#FFE3EC",    // Rose Quartz
    pink: "#FFB7B2",     // Pastel Pink Highlight
    blue: "#FFC6FF",     // Bubblegum
    cream: "#FFF5F8",    // Strawberry Milk
    lilac: "#FFD6E8",    // Soft Orchid
    sage: "#F5E1E6",     // Grayish Blossom Sage
    yellowDoodle: "#FFF0C2",
    background: "#FFF5F7",
  },
  Blue: {
    lavender: "#85A3FF", // Sky Blue
    peach: "#D6E4FF",    // Ice Blue
    pink: "#B3C5FF",     // Soft Hydrangea Blue
    blue: "#E8F0FE",     // Mist Blue
    cream: "#F0F4FF",    // Cloud White
    lilac: "#ADC2FF",    // Pale Lavender-Blue
    sage: "#D0E1FD",     // Slate Sage
    yellowDoodle: "#FFF9C4",
    background: "#F0F4FF",
  },
  Cream: {
    lavender: "#C0B4A9", // Warm Clay / Taupe
    peach: "#E2D9CF",    // Parchment
    pink: "#D2C4B7",     // Linen
    blue: "#EAE5DE",     // Alabaster
    cream: "#F6F3EC",    // Vintage Paper
    lilac: "#DBD2C9",    // Warm Dust
    sage: "#CCD3C7",     // Vintage Sage
    yellowDoodle: "#FFF4C2",
    background: "#F6F3EC",
  },
};

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  palette: ThemePalette;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("Lavender");

  // Load initial theme from localStorage on client side
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  // Apply CSS custom variables whenever the theme changes
  useEffect(() => {
    const currentPalette = themes[theme];
    const root = document.documentElement;

    root.style.setProperty("--color-lavender", currentPalette.lavender);
    root.style.setProperty("--color-peach", currentPalette.peach);
    root.style.setProperty("--color-pink", currentPalette.pink);
    root.style.setProperty("--color-blue", currentPalette.blue);
    root.style.setProperty("--color-cream", currentPalette.cream);
    root.style.setProperty("--color-lilac", currentPalette.lilac);
    root.style.setProperty("--color-sage", currentPalette.sage);
    root.style.setProperty("--color-yellow-doodle", currentPalette.yellowDoodle);
    root.style.setProperty("--background", currentPalette.background);

    // Save to localStorage
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    if (themes[newTheme]) {
      setThemeState(newTheme);
    }
  };

  const palette = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, palette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
