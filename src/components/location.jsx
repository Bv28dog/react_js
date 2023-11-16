import React, { useEffect, useState } from "react";

export const Location = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          },
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h2>Location :</h2>
      <p>Широта: {location.latitude}</p>
      <p>Довгота: {location.longitude}</p>
    </div>
  );
};
