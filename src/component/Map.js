import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap(props =>(
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{lat:21.306944,lng:-157.858333}}
  >
  {props.isMarkerShown &&
      <Marker position={{lat:21.306944,lng:-157.858333}} />
    }  
  </GoogleMap>
 ))
);

export default class Map extends Component{
  render() {
    return(
    <MyMapComponent
    isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCa4I00B8cdnZzy_5qJfw5MLqkEOPJuGXQ"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    );
  }
}