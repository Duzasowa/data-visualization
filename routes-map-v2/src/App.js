import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const API_KEY = "AIzaSyDEKLogRbwIF8nmPtly7Zgm7ucuW_qOr9w";

const Map = () => {
  const [waypoints, setWaypoints] = useState([]);
  const [directions, setDirections] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/datav2").then((response) => {
      setWaypoints(response.data);
    });
  }, []);

  const directionsCallback = (response) => {
    if (response !== null) {
      setDirections(response);
      setLoaded(true);
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {waypoints.map((waypoint, index) => (
          <React.Fragment key={index}>
            <DirectionsService
              options={{
                origin: center,
                destination: { lat: waypoint.lat, lng: waypoint.long },
                waypoints: waypoints
                  .filter((wp) => wp !== waypoint)
                  .map((wp) => ({ location: { lat: wp.lat, lng: wp.long } })),
                travelMode: "DRIVING",
              }}
              callback={directionsCallback}
            />
            {loaded && (
              <DirectionsRenderer options={{ directions: directions }} />
            )}
          </React.Fragment>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
