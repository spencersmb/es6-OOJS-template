import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import FleetDataService from './services/fleet-data-service.js';

export class DronePage extends Page {

  constructor(){
    super();

  }

  createElement(){
    //create element properly with new createElement function here
    super.createElement();
    
    let headers = "License License Model airTimeHours".split(' ');
    let dt = new DataTable(headers, FleetDataService.drones);
    dt.appendToElement(this.element);

  }

  getElementString() {
    return `<div style="margin: 20px"><h3>Drones</h3></div>`;
  }
}