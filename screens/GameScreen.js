import { ImageComponent, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import color from "../constants/color";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {/* Guess Number */}
      <View>
        <Text>Higher or Lower ? </Text>
        {/* + - */}
      </View>
      {/* <View> {LOG ROUNDS}</View> */}
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
});
