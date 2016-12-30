import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

  constructor(centerOfMap, data){
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  //overwrite original create element function
  createElement(){
    let dataArray = [];

    for( let c of this.data.cars ){
      dataArray.push(c);
    }

    for( let d of this.data.drones ){
      dataArray.push(d);
    }
    
    super.createElement(); //call original function and then continue with google code

    setTimeout( () => {

      let map = new window.google.maps.Map(document.getElementById('map'), {
        center: this.centerOfMap,
        zoom: 13
      });

      for( let vehicle of dataArray ){

        let [lat, long] = vehicle.latLong.split(' ');
        console.log(lat);
        console.log(vehicle);
        let myLatLng = new window.google.maps.LatLng(lat, long);

        let marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });

        marker.setMap(map);

      }

    },100);
  }

  getElementString(){
    return `
        <div id="map" style="width:800px; height: 400px;"></div>
     `;
  }

}