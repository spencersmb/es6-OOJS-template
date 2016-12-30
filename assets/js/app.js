import $ from 'jQuery';
import {fleet} from './fleet-data.js';
import FleetDataService from './services/fleet-data-service.js';
import Routes from './framework/app-base.js';
import {HomePage} from './home-page.js';
import {CarPage} from './car-page.js';
import {DronePage} from './drone-page.js';
import {MapPage} from './map-page.js';


export class App {

  constructor(){
    // super('Fleet Manager');

    FleetDataService.loadData(fleet);
    Routes.addRoute('Home', new HomePage(), true);
    Routes.addRoute('Cars', new CarPage());
    Routes.addRoute('Drones', new DronePage());
    Routes.addRoute('Map', new MapPage(), null);
  }

  init(){
    console.log("init app");

    //display nav + initial page load
    Routes.show($('body'));

    //check for errors
    // for( let e of dataService.errors){
    //   console.log(e);
    // }

    // let car = dataService.getCarByLicense('AT9900');
    //
    // let cars = dataService.getCarsSortedByLicense();
    //
    // let filteredCars = dataService.filterCarsByMake('e');

    // for( let car of cars ){
    //   console.log(car.licenseNum);
    // }

    // let g = new GoogleMap({lat: 40.771956, lng: -73.978531}, dataService);
    // g.appendToElement($('body'));

  }
}

export let myApp = new App();

window.MyModule = myApp;