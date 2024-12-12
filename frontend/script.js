document.getElementById('findMechanicsButton').addEventListener('click', function() {
  // Get the user's geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchMechanics, handleError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

// Function to fetch nearby mechanics
async function fetchMechanics(position) {
  const { latitude, longitude } = position.coords;

  // Send the coordinates to the backend API
  try {
    const response = await fetch('<API_GATEWAY_ENDPOINT>', {  // Replace with actual API Gateway endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude
      })
    });

    const data = await response.json();
    displayMechanics(data.mechanics);
  } catch (error) {
    console.error('Error fetching mechanics:', error);
    alert('Could not fetch mechanics at the moment.');
  }
}

// Display mechanics on the webpage
function displayMechanics(mechanics) {
  const mechanicList = document.getElementById('mechanicList');
  mechanicList.innerHTML = '';  // Clear any previous results

  mechanics.forEach(mechanic => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${mechanic.name}</strong><br>
      Phone: <a href="tel:${mechanic.phone}">${mechanic.phone}</a>
    `;
    mechanicList.appendChild(listItem);
  });
}

// Handle geolocation errors
function handleError(error) {
  alert("Error retrieving your location: " + error.message);
}
