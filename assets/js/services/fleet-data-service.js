import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-errors.js';

class FleetDataServiceClass{

  constructor(){
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(data){
    for( let item of data){

      switch (item.type){
        case 'car':
          //validate data first
          if(this.validateCarData(item)){
            let car = FleetDataServiceClass.loadCar(item); //instantiate raw data here and then push it into the array
            if(car){
              this.cars.push(car);
            }
          }else{
            let e = new DataError('Invalid Car Data', item);
            this.errors.push(e);
          }

          break;

        case 'drone':
          let drone = FleetDataServiceClass.loadDrone(item);
          this.drones.push(drone);
          break;
        default:
          let e = new DataError('Invalid Vehicle: Type', item);
          this.errors.push(e);
          break;
      }

    }
  }
  
  validateCarData(car){
    let requiredProps = 'license model latLong mile make'.split(' '); //split into array by space
    let hasErrors = false;
    //loop through and check that each car has that field
    for(let field of requiredProps) {
      if(!car[field]){
        this.errors.push( new DataError(`Invalid field ${field}`, car) );
        //can create more checks on data
        hasErrors = true;
      }
      if(Number.isNaN(Number.parseFloat(car.miles))){
        this.errors.push( new DataError('Invalid Milage is not a number', car) );
        //can create more checks on data
        hasErrors = true;
      }

      return !hasErrors; //if has errors this reutrns false and fails our other statement above - kinda funky
    }
  }

  getCarByLicense(license){
    
    return this.cars.find( (car) => {
      return car.license === license;
    });

    
  }

  getCarsSortedByLicense(carsArray){

    return this.cars.sort( (car1, car2) => {
      //if we return -1, that means car1 comes first
      if( car1.licenseNum < car2.licenseNum){
        return -1;
      }
      if( car1.licenseNum > car2.licenseNum){
        return 1;
      }
      return 0;
    })

  }

  filterCarsByMake(filter){
    return this.cars.filter((car)=>{
      return car.make.indexOf(filter) >= 0;
    });
  }

  static loadCar(car){
    try{
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    }catch(e){
      this.errors.push(new DataError('error loading car', car));
    }
    return null;
  }
  static loadDrone(drone){

    try{
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airtimehours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    }catch(e){
      this.errors.push(new DataError('error loading car', drone));
    }
    return null;
  }
  
}

let FleetDataService = new FleetDataServiceClass();

export default FleetDataService;