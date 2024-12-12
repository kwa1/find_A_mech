import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

function MechanicList({ mechanics }) {
  if (!mechanics.length) {
    return <Text style={styles.message}>No mechanics found. Try again.</Text>;
  }

  const renderMechanic = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Contact: {item.phone}</Text>
      <Text>Distance: {item.distance} km</Text>
      <Button title="Call" onPress={() => (window.location.href = `tel:${item.phone}`)} />
    </View>
  );

  return (
    <FlatList
      data={mechanics}
      renderItem={renderMechanic}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MechanicList;
