import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Switch } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { myColors } from "../components/styles/colors"; // Importing myColors
import Button from "../components/button"; // Importing Button component
import MyKeyboard from "@/components/MyKeyboard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: myColors.dark }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
