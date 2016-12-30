import {Vehicle} from './vehicle.js';

export class Drone  extends  Vehicle{
  constructor(license, model, latLong){
    super(license, model, latLong);//makes sure Vehicle class called first
    // this._id = id; //private var convention using underscore
    // this.name = name;
    
    this.airtimehours = null;
    this.base = null;
  }

  static getCompany(){
    //only exists on the class and cannot access 'this.id or this.name' because this isnt apart of the instance
    console.log('Cyberdyne');
  }

  fly(){
    console.log("Drone " + this.id + ' is flying');
  }

  get id() {
    //allows us to access the id property via drone.id instead of drone._id;
    return this._id;
  }

  set id(value){
    this._id = value;
  }
}