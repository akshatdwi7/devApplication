import { StyleSheet, Text, View } from "react-native";
import React from "react";

function GameInst({ children }) {
  return <Text style={styles.inst}>{children}</Text>;
}

export default GameInst;

const styles = StyleSheet.create({
  inst: {
    fontSize: 24,

    color: "#ddb52f",
    textAlign: "center",
    marginBottom: 16,
    padding: 12,

    backgroundColor: "#4e0329",
  },
});
