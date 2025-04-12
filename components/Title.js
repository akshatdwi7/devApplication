import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}> {children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    borderRadius: 18,
    padding: 12,
    borderColor: "#ddb52f",
    borderWidth: 2,
    backgroundColor: "#4e0329",
  },
});
