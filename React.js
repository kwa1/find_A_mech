#Web App (React.js Example): "Nearest Mechanic Finder - Web"

import React, { useState } from "react";

function NearestMechanicFinderWeb() {
  const [mechanics, setMechanics] = useState([]);
  
  const fetchMechanics = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch('<API_GATEWAY_ENDPOINT>', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ latitude, longitude }),
        });
        const data = await response.json();
        setMechanics(data.mechanics);
      });
    }
  };

  return (
    <div>
      <h1>Nearest Mechanic Finder - Web</h1>
      <button onClick={fetchMechanics}>Find Mechanics</button>
      <ul>
        {mechanics.map(mechanic => (
          <li key={mechanic.phone}>
            {mechanic.name} - <a href={`tel:${mechanic.phone}`}>{mechanic.phone}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NearestMechanicFinderWeb;
