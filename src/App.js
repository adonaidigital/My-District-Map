import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import fourSq from './mapsAPI/';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 19
    };
 }
 markerClicked = (marker)=>{
   this.closeMarkers();
   marker.isOpen = true;
   this.setState({markers: Object.assign(this.state.markers, marker)})
   fourSq.venueDetails(marker)
 }
 closeMarkers=() =>{
   const markers = this.state.markers.map(marker => {
    marker.isOpen = false;
    return marker;
   })
   this.setState({markers: Object.assign(this.state.markers, markers)})
 }

  componentDidMount(){
    fourSq.search({
      near:"Honolulu, HI",
      query:"beaches",
      limit: 10
     })
      .then(res => {
        const {venues} = res.response;
        const {center} = res.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
           return {
             lat:venue.location.lat,
             lng:venue.location.lng,
             isOpen: false,
             isVisible: true,
           }
        })
        this.setState({ venues, center, markers});
    })
      .catch(error => {console.log("ERROR! " + error);
    });
}
  render() {
    return (
      <div className='App'>
         <Map {...this.state} markerClicked={this.markerClicked}/>
      </div> 
    );
  }
}
export default App; 