import React, { Component } from 'react';
import './App.css';

class App extends Component {

  
   initMap =() => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:21.306944,lng:-157.858333},
      zoom: 10
    });
  }

  render() {
    return (
      <main>
      <div id="map"></div>
      </main> 
    );
  }
}

export default App;
