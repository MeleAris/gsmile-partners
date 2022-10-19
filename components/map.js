import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 6.163284296223614,
  lng: 1.2161105679585265
};

const locations = [
    {lat: 6.873284296223614, lng: 1.7201105679585265},
    {lat: 6.753394286223614, lng: 1.5761105679585265},
    {lat: 6.178284296223614, lng: 1.2361105679585265},
    {lat: 6.169284296223614, lng: 1.2561105679585265}
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        <Marker
        position={center}
        title='labas'/>
        <Marker
        position={locations[0]}
        title='labas'/>
        <Marker
        position={locations[1]}
        title='labas'/>
        <Marker
        position={locations[2]}
        title='labas'/>
        <Marker
        position={locations[3]}
        title='labas'/>

        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)

{/* <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM&callback=initMap"></script> */}