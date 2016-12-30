import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import Routes from './framework/app-base.js';

export class HomePage extends Page {
  constructor(){
    super('Home');
  }

  createElement(){
    //create element properly with new createElement function here
    super.createElement();

    let i = new Image('assets/images/drone.png');
    i.appendToElement(this.element); //this.element gets created initially in super.createElement() -> this is the div that gets created below
    
    let styleString = 'width: 300px; height: 80px; font-size: 16px;';
    let b = new Button('Self Driving Cars');
    b.appendToElement(this.element);
    b.element.click(() => {
      Routes.activateRoute('Cars')
    });
    
    b = new Button('Drones');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => {
      Routes.activateRoute('Drones')
    });

  }

  getElementString() {
    return `<div style="text-align: center"></div>`;
  }
}