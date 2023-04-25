import React, { useState, useEffect, useCallback } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import axios from "axios";

// Określenie stylu dla mapy
const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapContainer = ({ google }) => {
  const [segments, setSegments] = useState([]);
  const [data, setData] = useState([]);

  // Wykorzystanie useCallback, aby uniknąć ponownego renderowania funkcji
  const getRouteSegments = useCallback(async () => {
    try {
      const segmentSize = 50; // liczba punktów w odcinku
      const response = await axios.get("http://localhost:5000/datav1");
      const data = response.data;
      // Używając metody map, tworzona jest nowa tablica segmentów.

      // Warunek if sprawdza, czy indeks bieżącego elementu jest wielokrotnością segmentSize oraz czy jest to ostatni element tablicy.
      // Jeśli warunek jest spełniony, tworzony jest nowy obiekt odcinka, który zawiera punkt początkowy begin,
      // punkt końcowy end oraz tablicę punktów pomiędzy nimi, path.

      // Jeśli warunek nie jest spełniony, zwracana jest pusta tablica [],
      // ponieważ nie ma wystarczającej liczby punktów do utworzenia nowego odcinka.

      // W efekcie otrzymujemy nową tablicę z obiektami segmentów, która zostanie przekazana do stanu komponentu za pomocą metody setSegments().
      const newSegments = data.flatMap((point, index, array) => {
        if (index % segmentSize === 0 && index < array.length - 1) {
          return [
            {
              start: point,
              end: array[Math.min(index + segmentSize, array.length - 1)],
              path: array.slice(index, index + segmentSize + 1).map((p) => ({
                lat: p.lat,
                lng: p.long,
              })),
            },
          ];
        } else {
          return [];
        }
      });
      setSegments(newSegments);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getRouteSegments();
  }, [getRouteSegments]);

  // Dla każdego punktu na mapie zapowiadane są markery, które będą wyświetlane na mapie
  const markers = data.map((location, index) => (
    <Marker
      key={index}
      position={{ lat: location.lat, lng: location.long }}
      name={location.address}
    />
  ));

  return (
    <Map
      google={google}
      zoom={11}
      style={mapStyles}
      initialCenter={{
        lat: 37.381695,
        lng: -122.007695,
      }}
    >
      {markers}
      {segments.map(({ path }, index) => (
        <Polyline
          key={index}
          path={path}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
