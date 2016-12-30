
export class Vehicle {

  constructor(license, model, latLong){
    this.license = license;
    this.model = model;
    this.latLong = latLong;
  }

  start() {
    console.log("starting vehicle");
  }

  static getCompanyName(){
    console.log('Cyberdyne');
  }

}