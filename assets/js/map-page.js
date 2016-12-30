import {Page} from './framework/page.js';
import {GoogleMap} from './ui/google-maps.js';
import FleetDataService from './services/fleet-data-service.js';

export class MapPage extends Page {

  constructor(){
    super('Map');//page title
  }

  createElement(){
    //create element properly with new createElement function here
    super.createElement();

    let g = new GoogleMap({lat: 40.771956, lng: -73.978531}, FleetDataService);
    g.appendToElement(this.element);

  }

  getElementString() {
    return `<div style="margin: 20px"><h3>Map</h3></div>`;
  }
}