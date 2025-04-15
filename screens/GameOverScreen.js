import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const GameOverScreen = ({ onRestart }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>🎉 GAME OVER! 🎉</Text>
        <Text style={styles.message}>Aww, you did your best! 🐾</Text>
        <Button title="Try Again?" onPress={onRestart} color="#f7b2d9" />
      </View>
    </SafeAreaView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffe4e1", // Background color for the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#ff1493",
    marginBottom: 30,
    textAlign: "center",
  },
});
