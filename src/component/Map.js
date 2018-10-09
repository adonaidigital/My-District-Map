import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap(props=>(
  <GoogleMap
    defaultZoom={8}
    zoom = {props.zoom}
    defaultCenter={{lat:21.306944,lng:-157.858333}}
    center= {props.center} >
    {props.markers && 
      props.markers.filter(marker =>marker.isVisible)
      .map((marker,index)=>(
      <Marker key={index} 
      position={{lat:marker.lat,lng:marker.lng}}
      onClick={()=> props.markerClicked(marker)}>
         {marker.isOpen && ( 
           <InfoWindow>
              <p> Hello!</p>
          </InfoWindow>)}
      </Marker>
      ))}  
  </GoogleMap>
 ))
);

export default class Map extends Component{
  render() {
    return(
    <MyMapComponent
    {...this.props}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCa4I00B8cdnZzy_5qJfw5MLqkEOPJuGXQ"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    );
  }
}