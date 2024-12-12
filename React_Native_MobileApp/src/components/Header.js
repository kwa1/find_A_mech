import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Find a Mechanic</Text>
      <Text style={styles.subtitle}>Enter your location to find nearby help.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#007acc",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },
});

export default Header;
