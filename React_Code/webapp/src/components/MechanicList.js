import React from "react";

function MechanicList({ mechanics }) {
  if (!mechanics.length) {
    return <p>No mechanics found. Try searching again.</p>;
  }

  return (
    <div className="mechanic-list">
      {mechanics.map((mechanic, index) => (
        <div key={index} className="mechanic-card">
          <h3>{mechanic.name}</h3>
          <p>Contact: {mechanic.phone}</p>
          <p>Distance: {mechanic.distance} km</p>
          <button onClick={() => (window.location.href = `tel:${mechanic.phone}`)}>
            Call
          </button>
        </div>
      ))}
    </div>
  );
}

export default MechanicList;
