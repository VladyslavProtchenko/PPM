import React, { useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GoogleMaps = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAVbNNSBv8rX8ftQkneIxpdVcGy-bdhUvw" || "",
  });

  const defaultOptions = {
    zoom: 14,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    scaleControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
  };

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
    map.setZoom(14);

    map.fitBounds(
      new window.google.maps.LatLngBounds({ lng: -117.8661701, lat: 33.67047 })
    );
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = null;
  }, []);
  return isLoaded ? (
    <section className={container}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "260px " }}
        center={{ lng: -117.8661701, lat: 33.67047 }}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <Marker position={{ lat: 33.67047, lng: -117.8661701 }} />
      </GoogleMap>
    </section>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMaps);

const container = "flex flex-col w-full";
