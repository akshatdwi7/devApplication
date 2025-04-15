import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Cards from "../components/card";
import GameInst from "../components/GameInst";

function StartGameScreen({ onPickNumber }) {
  const [enteredValue, setEnteredValue] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }
  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmInputerHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber); // to pass the number to the parent component
  }

  return (
    <View style={styles.RootContainer}>
      <Title>Guess My Number</Title>
      <Cards>
        <GameInst>Enter a Number Cuite:)</GameInst>
        <TextInput
          style={styles.textinput}
          maxLength={2} // to limit the input to 2 characters
          placeholder="00"
          keyboardType="number-pad" // to show the number pad
          autoCapitalize="none" // to disable auto-capitalization
          autoCorrect={false} // to disable auto-correction
          value={enteredValue} // to bind the input value to the state
          onChangeText={numberInputHandler} // to handle the input
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputerHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Cards>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  textinput: {
    height: 50,

    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    color: "yellow",
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
