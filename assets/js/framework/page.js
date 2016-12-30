import {BaseElement} from '../ui/base-element.js';

//this would extend other items like a footer or sidebar etc breadcrumbs on the page template
export class Page extends BaseElement{
  constructor(pageTitle){
    super();
    this.pageTitle = pageTitle;
  }
}