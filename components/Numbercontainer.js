import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../constants/color";

const Numbercontainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default Numbercontainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: color.accent,
    padding: 24,
    borderRadius: 8,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: color.accent,
    fontSize: 36,
    fontWeight: "bold",
  },
});
