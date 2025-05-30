import { ImageComponent, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import Title from "../components/Title";
import color from "../constants/color";
import { useState, useEffect } from "react";
import Numbercontainer from "../components/Numbercontainer";
import PrimaryButton from "../components/PrimaryButton";
import Cards from "../components/card";
import GameInst from "../components/GameInst";
import Ionicons from "@expo/vector-icons/Ionicons";
function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const intialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;

      const newRandomNumber = generateRandomNumber(
        minBoundary,
        maxBoundary,
        currentGuess
      );
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary);
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Numbercontainer>{currentGuess}</Numbercontainer>
      <Cards>
        <GameInst>Higher or Lower?</GameInst>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Cards>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: color.accent,
    borderRadius: 18,
    padding: 12,
    borderColor: color.accent,
    borderWidth: 2,
    backgroundColor: color.background,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttons: {
    flex: 1,
  },
});
