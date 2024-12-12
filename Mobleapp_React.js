#Mobile App (React Native Example): "Nearest Mechanic Finder - Mobile"

import React, { useState } from 'react';
import { Button, View, Text, Linking } from 'react-native';

const NearestMechanicFinderMobile = () => {
  const [mechanics, setMechanics] = useState([]);

  const fetchMechanics = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch('<API_GATEWAY_ENDPOINT>', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude, longitude })
      });
      const data = await response.json();
      setMechanics(data.mechanics);
    });
  };

  return (
    <View>
      <Button title="Find Nearest Mechanics" onPress={fetchMechanics} />
      {mechanics.map(mechanic => (
        <View key={mechanic.phone}>
          <Text>{mechanic.name} - 
            <Text onPress={() => Linking.openURL(`tel:${mechanic.phone}`)}>{mechanic.phone}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default NearestMechanicFinderMobile;
