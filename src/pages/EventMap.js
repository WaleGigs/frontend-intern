import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  marginTop: '20px'
};

const center = {
  lat: 59.426700,
  lng: 24.708710
};

class EventMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyD505gDZan2Fw-dcmHHIDXAibP7mVJ9QTo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default React.memo(EventMap)