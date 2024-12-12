import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";

function LocationInput({ onSearch }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleGeolocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location permission is required.");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude.toString());
    setLongitude(location.coords.longitude.toString());
  };

  const handleSubmit = () => {
    if (!latitude || !longitude) {
      Alert.alert("Error", "Please provide a valid location.");
      return;
    }
    onSearch({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter latitude"
        keyboardType="numeric"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter longitude"
        keyboardType="numeric"
        value={longitude}
        onChangeText={setLongitude}
      />
      <Button title="Use My Location" onPress={handleGeolocation} />
      <Button title="Find Mechanics" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LocationInput;
