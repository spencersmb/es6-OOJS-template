import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
  constructor(license, model, latLong){
    super(license, model, latLong);//makes sure Vehicle class called first

    this.make = null;
    this.miles = null;
  }

  start(){
    super.start();
  }
}