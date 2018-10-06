import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareAPI from './mapsAPI/';
class App extends Component {
   constructor(){
      super();
      this.state = {
        venues: [],
        markers: [],
        center: [],
        zoom: 13
      };
   }

  componentDidMount(){
    SquareAPI.search({
      near:"Honolulu, HI",
      query:"tacos",
      limit: 3
     }).then(res => {console.log(res);
    });
}
  render() {
    return (
      <div className='App'>
         <Map />
      </div> 
    );
  }
}
export default App; 