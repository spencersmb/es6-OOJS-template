
/*
 The base element is intended to extend a class so that when you create a NEW elment like button, you can specifiy any
  HTML that gets created and it automatically creates that HTML object wrapped as a jquery object.
  
  First you create a new class that extends this class and overwrite the string to whatever html you need.
  Then you just add in the element it should append to.
  this.element will refer to the string element that gets created with a NEW class gets instantiated.
 */

export class BaseElement {
  
  constructor(){
    
    //JQ Object
    this.element = null;
    
  }
  
  appendToElement(el){
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }
  
  createElement(){
    let s = this.getElementString();
    this.element = $(s);
  }
  
  getElementString(){
    throw 'Please override getElementString in base Element';
  }

  enableJS(){
    //Material lite to enable JS on button clicks
    //not sure where he got this from - need to google it if I use material Lite ever
    componentHandler.upgradeElement(this.element[0]);
  }
  
}