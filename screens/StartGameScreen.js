import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        maxLength={2} // to limit the input to 2 characters
        placeholder="00"
        keyboardType="number-pad" // to show the number pad
        autoCapitalize="none" // to disable auto-capitalization
        autoCorrect={false} // to disable auto-correction
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4, // for Android it has no effect on iOS
    shadowColor: "black", // for iO
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowRadius: 6, // for iOS
    shadowOpacity: 0.25, // for iOS
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
