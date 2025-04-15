import { StyleSheet, View } from "react-native";
import React from "react";

function card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
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
});
