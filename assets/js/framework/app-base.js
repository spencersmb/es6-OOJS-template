import{TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
  constructor(title){
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }

  show(element){
    //add nav
    this.titleBar.appendToElement(element);

    //create click event and add route
    this.titleBar.element.find('.mdl-navigation__link').click((e)=>{
      let route = e.target.innerHTML;
      this.activateRoute(route.trim());
    });

    // if there is a default route, activate it and add it in to the body
    if(this.defaultRoute){
      this.activateRoute(this.defaultRoute);
    }
  }

  activateRoute(route){
    let content = this.titleBar.element.find('.page-content');
    content.empty();

    this.routeMap[route].appendToElement(content);
  }

  addRoute(id, pageObject, defaultRoute = false){
    //add link to title bar
    this.titleBar.addLink(id, '');

    //know where to route
    this.routeMap[id] = pageObject;

    if(defaultRoute){
      this.defaultRoute = id;
    }


  }
}

let Routes = new ApplicationBase('Fleet Service');

export default Routes;