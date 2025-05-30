import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameisOver] = useState(false);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }
  function gameOverHandler() {
    setGameisOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameisOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.5 }} // to make the image transparent
        // to make the image transparent
      >
        <StatusBar barStyle="light-content" backgroundColor="#4e0329" />
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
