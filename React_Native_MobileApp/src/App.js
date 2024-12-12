import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import MechanicList from "./components/MechanicList";

export default function App() {
  const [mechanics, setMechanics] = useState([]);

  const fetchMechanics = async (location) => {
    const apiEndpoint =
      "https://your-api-gateway-id.execute-api.us-east-1.amazonaws.com/prod/find-mechanics";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location),
      });
      const data = await response.json();
      setMechanics(data.mechanics || []);
    } catch (error) {
      console.error("Error fetching mechanics:", error);
      alert("Failed to fetch mechanics. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <LocationInput onSearch={fetchMechanics} />
      <MechanicList mechanics={mechanics} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
