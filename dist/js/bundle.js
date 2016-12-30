(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myApp = exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jQuery2 = _interopRequireDefault(_jQuery);

var _fleetData = require('./fleet-data.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _fleetDataService2 = _interopRequireDefault(_fleetDataService);

var _appBase = require('./framework/app-base.js');

var _appBase2 = _interopRequireDefault(_appBase);

var _homePage = require('./home-page.js');

var _carPage = require('./car-page.js');

var _dronePage = require('./drone-page.js');

var _mapPage = require('./map-page.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
  function App() {
    _classCallCheck(this, App);

    // super('Fleet Manager');

    _fleetDataService2.default.loadData(_fleetData.fleet);
    _appBase2.default.addRoute('Home', new _homePage.HomePage(), true);
    _appBase2.default.addRoute('Cars', new _carPage.CarPage());
    _appBase2.default.addRoute('Drones', new _dronePage.DronePage());
    _appBase2.default.addRoute('Map', new _mapPage.MapPage(), null);
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      console.log("init app");

      //display nav + initial page load
      _appBase2.default.show((0, _jQuery2.default)('body'));

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
  }]);

  return App;
}();

var myApp = exports.myApp = new App();

window.MyModule = myApp;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./car-page.js":2,"./drone-page.js":6,"./fleet-data.js":7,"./framework/app-base.js":8,"./home-page.js":10,"./map-page.js":11,"./services/fleet-data-service.js":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = require('./framework/page.js');

var _dataTable = require('./ui/data-table.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _fleetDataService2 = _interopRequireDefault(_fleetDataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarPage = exports.CarPage = function (_Page) {
  _inherits(CarPage, _Page);

  function CarPage() {
    _classCallCheck(this, CarPage);

    return _possibleConstructorReturn(this, (CarPage.__proto__ || Object.getPrototypeOf(CarPage)).call(this));
  }

  _createClass(CarPage, [{
    key: 'createElement',
    value: function createElement() {
      //create element properly with new createElement function here
      _get(CarPage.prototype.__proto__ || Object.getPrototypeOf(CarPage.prototype), 'createElement', this).call(this);
      var headers = "License Make Model Miles".split(' ');
      var dt = new _dataTable.DataTable(headers, _fleetDataService2.default.cars);
      dt.appendToElement(this.element);
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '<div style="margin: 20px"><h3>Cars</h3></div>';
    }
  }]);

  return CarPage;
}(_page.Page);

},{"./framework/page.js":9,"./services/fleet-data-service.js":13,"./ui/data-table.js":16}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _vehicle = require('./vehicle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = exports.Car = function (_Vehicle) {
  _inherits(Car, _Vehicle);

  function Car(license, model, latLong) {
    _classCallCheck(this, Car);

    //makes sure Vehicle class called first

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, license, model, latLong));

    _this.make = null;
    _this.miles = null;
    return _this;
  }

  _createClass(Car, [{
    key: 'start',
    value: function start() {
      _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), 'start', this).call(this);
    }
  }]);

  return Car;
}(_vehicle.Vehicle);

},{"./vehicle.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drone = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vehicle = require('./vehicle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drone = exports.Drone = function (_Vehicle) {
  _inherits(Drone, _Vehicle);

  function Drone(license, model, latLong) {
    _classCallCheck(this, Drone);

    //makes sure Vehicle class called first
    // this._id = id; //private var convention using underscore
    // this.name = name;

    var _this = _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).call(this, license, model, latLong));

    _this.airtimehours = null;
    _this.base = null;
    return _this;
  }

  _createClass(Drone, [{
    key: 'fly',
    value: function fly() {
      console.log("Drone " + this.id + ' is flying');
    }
  }, {
    key: 'id',
    get: function get() {
      //allows us to access the id property via drone.id instead of drone._id;
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }], [{
    key: 'getCompany',
    value: function getCompany() {
      //only exists on the class and cannot access 'this.id or this.name' because this isnt apart of the instance
      console.log('Cyberdyne');
    }
  }]);

  return Drone;
}(_vehicle.Vehicle);

},{"./vehicle.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = exports.Vehicle = function () {
  function Vehicle(license, model, latLong) {
    _classCallCheck(this, Vehicle);

    this.license = license;
    this.model = model;
    this.latLong = latLong;
  }

  _createClass(Vehicle, [{
    key: "start",
    value: function start() {
      console.log("starting vehicle");
    }
  }], [{
    key: "getCompanyName",
    value: function getCompanyName() {
      console.log('Cyberdyne');
    }
  }]);

  return Vehicle;
}();

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DronePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = require('./framework/page.js');

var _dataTable = require('./ui/data-table.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _fleetDataService2 = _interopRequireDefault(_fleetDataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DronePage = exports.DronePage = function (_Page) {
  _inherits(DronePage, _Page);

  function DronePage() {
    _classCallCheck(this, DronePage);

    return _possibleConstructorReturn(this, (DronePage.__proto__ || Object.getPrototypeOf(DronePage)).call(this));
  }

  _createClass(DronePage, [{
    key: 'createElement',
    value: function createElement() {
      //create element properly with new createElement function here
      _get(DronePage.prototype.__proto__ || Object.getPrototypeOf(DronePage.prototype), 'createElement', this).call(this);

      var headers = "License License Model airTimeHours".split(' ');
      var dt = new _dataTable.DataTable(headers, _fleetDataService2.default.drones);
      dt.appendToElement(this.element);
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '<div style="margin: 20px"><h3>Drones</h3></div>';
    }
  }]);

  return DronePage;
}(_page.Page);

},{"./framework/page.js":9,"./services/fleet-data-service.js":13,"./ui/data-table.js":16}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fleet = exports.fleet = [{
  license: 'ABC123',
  type: 'drone',
  model: 'Amazon 1250',
  airTimeHours: '6050',
  base: 'New York',
  latLong: '40.775596 -73.974615'
}, {
  license: 'XYZ456',
  type: 'drone',
  model: 'Amazon 1550',
  airTimeHours: '2100',
  base: 'New York',
  latLong: '40.771956 -73.978531'
}, {
  license: 'QRS678',
  type: 'drone',
  model: 'Google 3800',
  airTimeHours: '300',
  base: 'New York',
  latLong: '40.779423 -73.969411'
}, {
  license: 'AT9900',
  type: 'car',
  make: 'Tesla',
  model: 'Quick Transport',
  miles: '15600',
  latLong: '40.773272 -73.968875'
}, {
  license: 'AT2000',
  type: 'car',
  make: 'Uber',
  model: 'Auto Taxi plus',
  miles: '400',
  latLong: '40.778878 -73.968435'
}];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _titleBar = require('../ui/title-bar.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationBase = exports.ApplicationBase = function () {
  function ApplicationBase(title) {
    _classCallCheck(this, ApplicationBase);

    this.title = title;
    this.titleBar = new _titleBar.TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }

  _createClass(ApplicationBase, [{
    key: 'show',
    value: function show(element) {
      var _this = this;

      //add nav
      this.titleBar.appendToElement(element);

      //create click event and add route
      this.titleBar.element.find('.mdl-navigation__link').click(function (e) {
        var route = e.target.innerHTML;
        _this.activateRoute(route.trim());
      });

      // if there is a default route, activate it and add it in to the body
      if (this.defaultRoute) {
        this.activateRoute(this.defaultRoute);
      }
    }
  }, {
    key: 'activateRoute',
    value: function activateRoute(route) {
      var content = this.titleBar.element.find('.page-content');
      content.empty();

      this.routeMap[route].appendToElement(content);
    }
  }, {
    key: 'addRoute',
    value: function addRoute(id, pageObject) {
      var defaultRoute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      //add link to title bar
      this.titleBar.addLink(id, '');

      //know where to route
      this.routeMap[id] = pageObject;

      if (defaultRoute) {
        this.defaultRoute = id;
      }
    }
  }]);

  return ApplicationBase;
}();

var Routes = new ApplicationBase('Fleet Service');

exports.default = Routes;

},{"../ui/title-bar.js":19}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _baseElement = require('../ui/base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//this would extend other items like a footer or sidebar etc breadcrumbs on the page template
var Page = exports.Page = function (_BaseElement) {
  _inherits(Page, _BaseElement);

  function Page(pageTitle) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this.pageTitle = pageTitle;
    return _this;
  }

  return Page;
}(_baseElement.BaseElement);

},{"../ui/base-element.js":14}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = require('./framework/page.js');

var _image = require('./ui/image.js');

var _button = require('./ui/button.js');

var _appBase = require('./framework/app-base.js');

var _appBase2 = _interopRequireDefault(_appBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = exports.HomePage = function (_Page) {
  _inherits(HomePage, _Page);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, 'Home'));
  }

  _createClass(HomePage, [{
    key: 'createElement',
    value: function createElement() {
      //create element properly with new createElement function here
      _get(HomePage.prototype.__proto__ || Object.getPrototypeOf(HomePage.prototype), 'createElement', this).call(this);

      var i = new _image.Image('assets/images/drone.png');
      i.appendToElement(this.element); //this.element gets created initially in super.createElement() -> this is the div that gets created below

      var styleString = 'width: 300px; height: 80px; font-size: 16px;';
      var b = new _button.Button('Self Driving Cars');
      b.appendToElement(this.element);
      b.element.click(function () {
        _appBase2.default.activateRoute('Cars');
      });

      b = new _button.Button('Drones');
      b.setStyleString(styleString);
      b.appendToElement(this.element);
      b.element.click(function () {
        _appBase2.default.activateRoute('Drones');
      });
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '<div style="text-align: center"></div>';
    }
  }]);

  return HomePage;
}(_page.Page);

},{"./framework/app-base.js":8,"./framework/page.js":9,"./ui/button.js":15,"./ui/image.js":18}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = require('./framework/page.js');

var _googleMaps = require('./ui/google-maps.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _fleetDataService2 = _interopRequireDefault(_fleetDataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapPage = exports.MapPage = function (_Page) {
  _inherits(MapPage, _Page);

  function MapPage() {
    _classCallCheck(this, MapPage);

    return _possibleConstructorReturn(this, (MapPage.__proto__ || Object.getPrototypeOf(MapPage)).call(this, 'Map')); //page title
  }

  _createClass(MapPage, [{
    key: 'createElement',
    value: function createElement() {
      //create element properly with new createElement function here
      _get(MapPage.prototype.__proto__ || Object.getPrototypeOf(MapPage.prototype), 'createElement', this).call(this);

      var g = new _googleMaps.GoogleMap({ lat: 40.771956, lng: -73.978531 }, _fleetDataService2.default);
      g.appendToElement(this.element);
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '<div style="margin: 20px"><h3>Map</h3></div>';
    }
  }]);

  return MapPage;
}(_page.Page);

},{"./framework/page.js":9,"./services/fleet-data-service.js":13,"./ui/google-maps.js":17}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataError = exports.DataError = function DataError(message, data) {
  _classCallCheck(this, DataError);

  this.message = message;
  this.data = data;
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = require('../classes/car.js');

var _drone = require('../classes/drone.js');

var _dataErrors = require('./data-errors.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FleetDataServiceClass = function () {
  function FleetDataServiceClass() {
    _classCallCheck(this, FleetDataServiceClass);

    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  _createClass(FleetDataServiceClass, [{
    key: 'loadData',
    value: function loadData(data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;


          switch (item.type) {
            case 'car':
              //validate data first
              if (this.validateCarData(item)) {
                var car = FleetDataServiceClass.loadCar(item); //instantiate raw data here and then push it into the array
                if (car) {
                  this.cars.push(car);
                }
              } else {
                var _e = new _dataErrors.DataError('Invalid Car Data', item);
                this.errors.push(_e);
              }

              break;

            case 'drone':
              var drone = FleetDataServiceClass.loadDrone(item);
              this.drones.push(drone);
              break;
            default:
              var e = new _dataErrors.DataError('Invalid Vehicle: Type', item);
              this.errors.push(e);
              break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'validateCarData',
    value: function validateCarData(car) {
      var requiredProps = 'license model latLong mile make'.split(' '); //split into array by space
      var hasErrors = false;
      //loop through and check that each car has that field
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = requiredProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          if (!car[field]) {
            this.errors.push(new _dataErrors.DataError('Invalid field ' + field, car));
            //can create more checks on data
            hasErrors = true;
          }
          if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new _dataErrors.DataError('Invalid Milage is not a number', car));
            //can create more checks on data
            hasErrors = true;
          }

          return !hasErrors; //if has errors this reutrns false and fails our other statement above - kinda funky
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'getCarByLicense',
    value: function getCarByLicense(license) {

      return this.cars.find(function (car) {
        return car.license === license;
      });
    }
  }, {
    key: 'getCarsSortedByLicense',
    value: function getCarsSortedByLicense(carsArray) {

      return this.cars.sort(function (car1, car2) {
        //if we return -1, that means car1 comes first
        if (car1.licenseNum < car2.licenseNum) {
          return -1;
        }
        if (car1.licenseNum > car2.licenseNum) {
          return 1;
        }
        return 0;
      });
    }
  }, {
    key: 'filterCarsByMake',
    value: function filterCarsByMake(filter) {
      return this.cars.filter(function (car) {
        return car.make.indexOf(filter) >= 0;
      });
    }
  }], [{
    key: 'loadCar',
    value: function loadCar(car) {
      try {
        var c = new _car.Car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
      } catch (e) {
        this.errors.push(new _dataErrors.DataError('error loading car', car));
      }
      return null;
    }
  }, {
    key: 'loadDrone',
    value: function loadDrone(drone) {

      try {
        var d = new _drone.Drone(drone.license, drone.model, drone.latLong);
        d.airtimehours = drone.airTimeHours;
        d.base = drone.base;
        return d;
      } catch (e) {
        this.errors.push(new _dataErrors.DataError('error loading car', drone));
      }
      return null;
    }
  }]);

  return FleetDataServiceClass;
}();

var FleetDataService = new FleetDataServiceClass();

exports.default = FleetDataService;

},{"../classes/car.js":3,"../classes/drone.js":4,"./data-errors.js":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 The base element is intended to extend a class so that when you create a NEW elment like button, you can specifiy any
  HTML that gets created and it automatically creates that HTML object wrapped as a jquery object.
  
  First you create a new class that extends this class and overwrite the string to whatever html you need.
  Then you just add in the element it should append to.
  this.element will refer to the string element that gets created with a NEW class gets instantiated.
 */

var BaseElement = exports.BaseElement = function () {
  function BaseElement() {
    _classCallCheck(this, BaseElement);

    //JQ Object
    this.element = null;
  }

  _createClass(BaseElement, [{
    key: 'appendToElement',
    value: function appendToElement(el) {
      this.createElement();
      el.append(this.element);
      this.enableJS();
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var s = this.getElementString();
      this.element = $(s);
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      throw 'Please override getElementString in base Element';
    }
  }, {
    key: 'enableJS',
    value: function enableJS() {
      //Material lite to enable JS on button clicks
      //not sure where he got this from - need to google it if I use material Lite ever
      componentHandler.upgradeElement(this.element[0]);
    }
  }]);

  return BaseElement;
}();

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = require('./base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_BaseElement) {
  _inherits(Button, _BaseElement);

  function Button(title) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.title = title;
    _this.styleString = '';
    return _this;
  }

  _createClass(Button, [{
    key: 'setStyleString',
    value: function setStyleString(style) {
      this.styleString = style;
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '\n        <button \n            class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"\n            style="' + this.styleString + '"\n        >\n            ' + this.title + '\n        </button>\n     ';
    }
  }]);

  return Button;
}(_baseElement.BaseElement);

},{"./base-element.js":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = require('./base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTable = exports.DataTable = function (_BaseElement) {
  _inherits(DataTable, _BaseElement);

  function DataTable(headers, data) {
    _classCallCheck(this, DataTable);

    var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this));

    _this.headers = headers;
    _this.data = data;
    return _this;
  }

  _createClass(DataTable, [{
    key: 'getElementString',
    value: function getElementString() {
      var thHeaders = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var h = _step.value;

          thHeaders += '\n        <th class="mdl-data-table__cell--non-numeric">' + h + '</th>\n      ';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var trTags = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;

          trTags += '<tr>';

          var tdTags = '';

          //loop through headers array to pull out fileds of data we will need
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.headers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var property = _step3.value;

              var field = row[property.toLowerCase()]; //must make the field lowercase to access the name properly in the array
              trTags += '\n            <td class="mdl-data-table__cell--non-numeric">' + field + '</td>\n          ';
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          trTags += '</tr>';
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return '\n      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">\n        <thead>\n          <tr>\n            ' + thHeaders + '\n          </tr>\n        </thead>\n        <tbody>\n            ' + trTags + '\n        </tbody>\n      </table>\n     ';
    }
  }]);

  return DataTable;
}(_baseElement.BaseElement);

},{"./base-element.js":14}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMap = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseElement = require('./base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMap = exports.GoogleMap = function (_BaseElement) {
  _inherits(GoogleMap, _BaseElement);

  function GoogleMap(centerOfMap, data) {
    _classCallCheck(this, GoogleMap);

    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this));

    _this.centerOfMap = centerOfMap;
    _this.data = data;
    return _this;
  }

  //overwrite original create element function


  _createClass(GoogleMap, [{
    key: 'createElement',
    value: function createElement() {
      var _this2 = this;

      var dataArray = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data.cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          dataArray.push(c);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.data.drones[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var d = _step2.value;

          dataArray.push(d);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      _get(GoogleMap.prototype.__proto__ || Object.getPrototypeOf(GoogleMap.prototype), 'createElement', this).call(this); //call original function and then continue with google code

      setTimeout(function () {

        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: _this2.centerOfMap,
          zoom: 13
        });

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = dataArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var vehicle = _step3.value;

            var _vehicle$latLong$spli = vehicle.latLong.split(' '),
                _vehicle$latLong$spli2 = _slicedToArray(_vehicle$latLong$spli, 2),
                lat = _vehicle$latLong$spli2[0],
                long = _vehicle$latLong$spli2[1];

            console.log(lat);
            console.log(vehicle);
            var myLatLng = new window.google.maps.LatLng(lat, long);

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map
            });

            marker.setMap(map);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }, 100);
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      return '\n        <div id="map" style="width:800px; height: 400px;"></div>\n     ';
    }
  }]);

  return GoogleMap;
}(_baseElement.BaseElement);

},{"./base-element.js":14}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = require('./base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = exports.Image = function (_BaseElement) {
  _inherits(Image, _BaseElement);

  function Image(fileName) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

    _this.fileName = fileName;
    return _this;
  }

  _createClass(Image, [{
    key: 'getElementString',
    value: function getElementString() {
      return '\n        <img src="' + this.fileName + '" style="width:100%; max-width:300px;">\n     ';
    }
  }]);

  return Image;
}(_baseElement.BaseElement);

},{"./base-element.js":14}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = require('./base-element.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = exports.TitleBar = function (_BaseElement) {
  _inherits(TitleBar, _BaseElement);

  function TitleBar(title) {
    _classCallCheck(this, TitleBar);

    var _this = _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).call(this));

    _this.title = title;
    _this.links = [];
    return _this;
  }

  _createClass(TitleBar, [{
    key: 'addLink',
    value: function addLink(title, href) {
      //es6 implys the name is the same as the variable name
      //otherwise you can specify title: title or something else if you want
      this.links.push({
        title: title,
        href: href
      });
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {
      var links = '';

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var link = _step.value;

          links += '\n        <a class="mdl-navigation__link" \n           >' + link.title + '</a>\n';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '\n    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\n      <header class="mdl-layout__header">\n        <div class="mdl-layout__header-row">\n          <!-- Title -->\n          <span class="mdl-layout-title">' + this.title + '</span>\n          <!-- Add spacer, to align navigation to the right -->\n          <div class="mdl-layout-spacer"></div>\n          <!-- Navigation. We hide it in small screens. -->\n          <nav class="mdl-navigation mdl-layout--large-screen-only">\n            ' + links + '\n          </nav>\n        </div>\n      </header>\n      <div class="mdl-layout__drawer">\n        <span class="mdl-layout-title">' + this.title + '</span>\n        <nav class="mdl-navigation">\n          ' + links + '\n        </nav>\n      </div>\n      <main class="mdl-layout__content">\n        <div class="page-content"><!-- Your content goes here --></div>\n      </main>\n    </div>\n     ';
    }
  }]);

  return TitleBar;
}(_baseElement.BaseElement);

},{"./base-element.js":14}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL2Nhci1wYWdlLmpzIiwiYXNzZXRzL2pzL2NsYXNzZXMvY2FyLmpzIiwiYXNzZXRzL2pzL2NsYXNzZXMvZHJvbmUuanMiLCJhc3NldHMvanMvY2xhc3Nlcy92ZWhpY2xlLmpzIiwiYXNzZXRzL2pzL2Ryb25lLXBhZ2UuanMiLCJhc3NldHMvanMvZmxlZXQtZGF0YS5qcyIsImFzc2V0cy9qcy9mcmFtZXdvcmsvYXBwLWJhc2UuanMiLCJhc3NldHMvanMvZnJhbWV3b3JrL3BhZ2UuanMiLCJhc3NldHMvanMvaG9tZS1wYWdlLmpzIiwiYXNzZXRzL2pzL21hcC1wYWdlLmpzIiwiYXNzZXRzL2pzL3NlcnZpY2VzL2RhdGEtZXJyb3JzLmpzIiwiYXNzZXRzL2pzL3NlcnZpY2VzL2ZsZWV0LWRhdGEtc2VydmljZS5qcyIsImFzc2V0cy9qcy91aS9iYXNlLWVsZW1lbnQuanMiLCJhc3NldHMvanMvdWkvYnV0dG9uLmpzIiwiYXNzZXRzL2pzL3VpL2RhdGEtdGFibGUuanMiLCJhc3NldHMvanMvdWkvZ29vZ2xlLW1hcHMuanMiLCJhc3NldHMvanMvdWkvaW1hZ2UuanMiLCJhc3NldHMvanMvdWkvdGl0bGUtYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFHYSxHLFdBQUEsRztBQUVYLGlCQUFhO0FBQUE7O0FBQ1g7O0FBRUEsK0JBQWlCLFFBQWpCO0FBQ0Esc0JBQU8sUUFBUCxDQUFnQixNQUFoQixFQUF3Qix3QkFBeEIsRUFBd0MsSUFBeEM7QUFDQSxzQkFBTyxRQUFQLENBQWdCLE1BQWhCLEVBQXdCLHNCQUF4QjtBQUNBLHNCQUFPLFFBQVAsQ0FBZ0IsUUFB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Qiw2QkFBZ0IsS0FBSyxLQUFyQiw4SEFBMkI7QUFBQSxjQUFuQixJQUFtQjs7QUFDekIsZ0ZBRVEsS0FBSyxLQUZiO0FBR0Q7QUFQZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNoQixxUEFLdUMsS0FBSyxLQUw1QyxrUkFVVSxLQVZWLDRJQWVxQyxLQUFLLEtBZjFDLGlFQWlCUSxLQWpCUjtBQXlCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqUXVlcnknO1xuaW1wb3J0IHtmbGVldH0gZnJvbSAnLi9mbGVldC1kYXRhLmpzJztcbmltcG9ydCBGbGVldERhdGFTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvZmxlZXQtZGF0YS1zZXJ2aWNlLmpzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9mcmFtZXdvcmsvYXBwLWJhc2UuanMnO1xuaW1wb3J0IHtIb21lUGFnZX0gZnJvbSAnLi9ob21lLXBhZ2UuanMnO1xuaW1wb3J0IHtDYXJQYWdlfSBmcm9tICcuL2Nhci1wYWdlLmpzJztcbmltcG9ydCB7RHJvbmVQYWdlfSBmcm9tICcuL2Ryb25lLXBhZ2UuanMnO1xuaW1wb3J0IHtNYXBQYWdlfSBmcm9tICcuL21hcC1wYWdlLmpzJztcblxuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vIHN1cGVyKCdGbGVldCBNYW5hZ2VyJyk7XG5cbiAgICBGbGVldERhdGFTZXJ2aWNlLmxvYWREYXRhKGZsZWV0KTtcbiAgICBSb3V0ZXMuYWRkUm91dGUoJ0hvbWUnLCBuZXcgSG9tZVBhZ2UoKSwgdHJ1ZSk7XG4gICAgUm91dGVzLmFkZFJvdXRlKCdDYXJzJywgbmV3IENhclBhZ2UoKSk7XG4gICAgUm91dGVzLmFkZFJvdXRlKCdEcm9uZXMnLCBuZXcgRHJvbmVQYWdlKCkpO1xuICAgIFJvdXRlcy5hZGRSb3V0ZSgnTWFwJywgbmV3IE1hcFBhZ2UoKSwgbnVsbCk7XG4gIH1cblxuICBpbml0KCl7XG4gICAgY29uc29sZS5sb2coXCJpbml0IGFwcFwiKTtcblxuICAgIC8vZGlzcGxheSBuYXYgKyBpbml0aWFsIHBhZ2UgbG9hZFxuICAgIFJvdXRlcy5zaG93KCQoJ2JvZHknKSk7XG5cbiAgICAvL2NoZWNrIGZvciBlcnJvcnNcbiAgICAvLyBmb3IoIGxldCBlIG9mIGRhdGFTZXJ2aWNlLmVycm9ycyl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsZXQgY2FyID0gZGF0YVNlcnZpY2UuZ2V0Q2FyQnlMaWNlbnNlKCdBVDk5MDAnKTtcbiAgICAvL1xuICAgIC8vIGxldCBjYXJzID0gZGF0YVNlcnZpY2UuZ2V0Q2Fyc1NvcnRlZEJ5TGljZW5zZSgpO1xuICAgIC8vXG4gICAgLy8gbGV0IGZpbHRlcmVkQ2FycyA9IGRhdGFTZXJ2aWNlLmZpbHRlckNhcnNCeU1ha2UoJ2UnKTtcblxuICAgIC8vIGZvciggbGV0IGNhciBvZiBjYXJzICl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjYXIubGljZW5zZU51bSk7XG4gICAgLy8gfVxuXG4gICAgLy8gbGV0IGcgPSBuZXcgR29vZ2xlTWFwKHtsYXQ6IDQwLjc3MTk1NiwgbG5nOiAtNzMuOTc4NTMxfSwgZGF0YVNlcnZpY2UpO1xuICAgIC8vIGcuYXBwZW5kVG9FbGVtZW50KCQoJ2JvZHknKSk7XG5cbiAgfVxufVxuXG5leHBvcnQgbGV0IG15QXBwID0gbmV3IEFwcCgpO1xuXG53aW5kb3cuTXlNb2R1bGUgPSBteUFwcDsiLCJpbXBvcnQge1BhZ2V9IGZyb20gJy4vZnJhbWV3b3JrL3BhZ2UuanMnO1xuaW1wb3J0IHtEYXRhVGFibGV9IGZyb20gJy4vdWkvZGF0YS10YWJsZS5qcyc7XG5pbXBvcnQgRmxlZXREYXRhU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2ZsZWV0LWRhdGEtc2VydmljZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXJQYWdlIGV4dGVuZHMgUGFnZSB7XG4gIFxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG5cbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKXtcbiAgICAvL2NyZWF0ZSBlbGVtZW50IHByb3Blcmx5IHdpdGggbmV3IGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaGVyZVxuICAgIHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICBsZXQgaGVhZGVycyA9IFwiTGljZW5zZSBNYWtlIE1vZGVsIE1pbGVzXCIuc3BsaXQoJyAnKTtcbiAgICBsZXQgZHQgPSBuZXcgRGF0YVRhYmxlKGhlYWRlcnMsIEZsZWV0RGF0YVNlcnZpY2UuY2Fycyk7XG4gICAgZHQuYXBwZW5kVG9FbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgXG4gIH1cblxuICBnZXRFbGVtZW50U3RyaW5nKCkge1xuICAgIHJldHVybiBgPGRpdiBzdHlsZT1cIm1hcmdpbjogMjBweFwiPjxoMz5DYXJzPC9oMz48L2Rpdj5gO1xuICB9XG59IiwiaW1wb3J0IHtWZWhpY2xlfSBmcm9tICcuL3ZlaGljbGUuanMnO1xuXG5leHBvcnQgY2xhc3MgQ2FyIGV4dGVuZHMgVmVoaWNsZSB7XG4gIGNvbnN0cnVjdG9yKGxpY2Vuc2UsIG1vZGVsLCBsYXRMb25nKXtcbiAgICBzdXBlcihsaWNlbnNlLCBtb2RlbCwgbGF0TG9uZyk7Ly9tYWtlcyBzdXJlIFZlaGljbGUgY2xhc3MgY2FsbGVkIGZpcnN0XG5cbiAgICB0aGlzLm1ha2UgPSBudWxsO1xuICAgIHRoaXMubWlsZXMgPSBudWxsO1xuICB9XG5cbiAgc3RhcnQoKXtcbiAgICBzdXBlci5zdGFydCgpO1xuICB9XG59IiwiaW1wb3J0IHtWZWhpY2xlfSBmcm9tICcuL3ZlaGljbGUuanMnO1xuXG5leHBvcnQgY2xhc3MgRHJvbmUgIGV4dGVuZHMgIFZlaGljbGV7XG4gIGNvbnN0cnVjdG9yKGxpY2Vuc2UsIG1vZGVsLCBsYXRMb25nKXtcbiAgICBzdXBlcihsaWNlbnNlLCBtb2RlbCwgbGF0TG9uZyk7Ly9tYWtlcyBzdXJlIFZlaGljbGUgY2xhc3MgY2FsbGVkIGZpcnN0XG4gICAgLy8gdGhpcy5faWQgPSBpZDsgLy9wcml2YXRlIHZhciBjb252ZW50aW9uIHVzaW5nIHVuZGVyc2NvcmVcbiAgICAvLyB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIFxuICAgIHRoaXMuYWlydGltZWhvdXJzID0gbnVsbDtcbiAgICB0aGlzLmJhc2UgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldENvbXBhbnkoKXtcbiAgICAvL29ubHkgZXhpc3RzIG9uIHRoZSBjbGFzcyBhbmQgY2Fubm90IGFjY2VzcyAndGhpcy5pZCBvciB0aGlzLm5hbWUnIGJlY2F1c2UgdGhpcyBpc250IGFwYXJ0IG9mIHRoZSBpbnN0YW5jZVxuICAgIGNvbnNvbGUubG9nKCdDeWJlcmR5bmUnKTtcbiAgfVxuXG4gIGZseSgpe1xuICAgIGNvbnNvbGUubG9nKFwiRHJvbmUgXCIgKyB0aGlzLmlkICsgJyBpcyBmbHlpbmcnKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICAvL2FsbG93cyB1cyB0byBhY2Nlc3MgdGhlIGlkIHByb3BlcnR5IHZpYSBkcm9uZS5pZCBpbnN0ZWFkIG9mIGRyb25lLl9pZDtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgaWQodmFsdWUpe1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbn0iLCJcbmV4cG9ydCBjbGFzcyBWZWhpY2xlIHtcblxuICBjb25zdHJ1Y3RvcihsaWNlbnNlLCBtb2RlbCwgbGF0TG9uZyl7XG4gICAgdGhpcy5saWNlbnNlID0gbGljZW5zZTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5sYXRMb25nID0gbGF0TG9uZztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRpbmcgdmVoaWNsZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb21wYW55TmFtZSgpe1xuICAgIGNvbnNvbGUubG9nKCdDeWJlcmR5bmUnKTtcbiAgfVxuXG59IiwiaW1wb3J0IHtQYWdlfSBmcm9tICcuL2ZyYW1ld29yay9wYWdlLmpzJztcbmltcG9ydCB7RGF0YVRhYmxlfSBmcm9tICcuL3VpL2RhdGEtdGFibGUuanMnO1xuaW1wb3J0IEZsZWV0RGF0YVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9mbGVldC1kYXRhLXNlcnZpY2UuanMnO1xuXG5leHBvcnQgY2xhc3MgRHJvbmVQYWdlIGV4dGVuZHMgUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuXG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCl7XG4gICAgLy9jcmVhdGUgZWxlbWVudCBwcm9wZXJseSB3aXRoIG5ldyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGhlcmVcbiAgICBzdXBlci5jcmVhdGVFbGVtZW50KCk7XG4gICAgXG4gICAgbGV0IGhlYWRlcnMgPSBcIkxpY2Vuc2UgTGljZW5zZSBNb2RlbCBhaXJUaW1lSG91cnNcIi5zcGxpdCgnICcpO1xuICAgIGxldCBkdCA9IG5ldyBEYXRhVGFibGUoaGVhZGVycywgRmxlZXREYXRhU2VydmljZS5kcm9uZXMpO1xuICAgIGR0LmFwcGVuZFRvRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuXG4gIH1cblxuICBnZXRFbGVtZW50U3RyaW5nKCkge1xuICAgIHJldHVybiBgPGRpdiBzdHlsZT1cIm1hcmdpbjogMjBweFwiPjxoMz5Ecm9uZXM8L2gzPjwvZGl2PmA7XG4gIH1cbn0iLCJleHBvcnQgbGV0IGZsZWV0ID0gW1xuICB7XG4gICAgbGljZW5zZTonQUJDMTIzJyxcbiAgICB0eXBlOiAnZHJvbmUnLFxuICAgIG1vZGVsOiAnQW1hem9uIDEyNTAnLFxuICAgIGFpclRpbWVIb3VyczogJzYwNTAnLFxuICAgIGJhc2U6ICdOZXcgWW9yaycsXG4gICAgbGF0TG9uZzogJzQwLjc3NTU5NiAtNzMuOTc0NjE1J1xuICB9LFxuICB7XG4gICAgbGljZW5zZTonWFlaNDU2JyxcbiAgICB0eXBlOiAnZHJvbmUnLFxuICAgIG1vZGVsOiAnQW1hem9uIDE1NTAnLFxuICAgIGFpclRpbWVIb3VyczogJzIxMDAnLFxuICAgIGJhc2U6ICdOZXcgWW9yaycsXG4gICAgbGF0TG9uZzogJzQwLjc3MTk1NiAtNzMuOTc4NTMxJ1xuICB9LFxuICB7XG4gICAgbGljZW5zZTonUVJTNjc4JyxcbiAgICB0eXBlOiAnZHJvbmUnLFxuICAgIG1vZGVsOiAnR29vZ2xlIDM4MDAnLFxuICAgIGFpclRpbWVIb3VyczogJzMwMCcsXG4gICAgYmFzZTogJ05ldyBZb3JrJyxcbiAgICBsYXRMb25nOiAnNDAuNzc5NDIzIC03My45Njk0MTEnXG4gIH0sXG4gIHtcbiAgICBsaWNlbnNlOidBVDk5MDAnLFxuICAgIHR5cGU6ICdjYXInLFxuICAgIG1ha2U6ICdUZXNsYScsXG4gICAgbW9kZWw6ICdRdWljayBUcmFuc3BvcnQnLFxuICAgIG1pbGVzOiAnMTU2MDAnLFxuICAgIGxhdExvbmc6ICc0MC43NzMyNzIgLTczLjk2ODg3NSdcbiAgfSxcbiAge1xuICAgIGxpY2Vuc2U6J0FUMjAwMCcsXG4gICAgdHlwZTogJ2NhcicsXG4gICAgbWFrZTogJ1ViZXInLFxuICAgIG1vZGVsOiAnQXV0byBUYXhpIHBsdXMnLFxuICAgIG1pbGVzOiAnNDAwJyxcbiAgICBsYXRMb25nOiAnNDAuNzc4ODc4IC03My45Njg0MzUnXG4gIH1cbl07IiwiaW1wb3J0e1RpdGxlQmFyfSBmcm9tICcuLi91aS90aXRsZS1iYXIuanMnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IodGl0bGUpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRpdGxlQmFyID0gbmV3IFRpdGxlQmFyKHRoaXMudGl0bGUpO1xuICAgIHRoaXMucm91dGVNYXAgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRSb3V0ZSA9IG51bGw7XG4gIH1cblxuICBzaG93KGVsZW1lbnQpe1xuICAgIC8vYWRkIG5hdlxuICAgIHRoaXMudGl0bGVCYXIuYXBwZW5kVG9FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgLy9jcmVhdGUgY2xpY2sgZXZlbnQgYW5kIGFkZCByb3V0ZVxuICAgIHRoaXMudGl0bGVCYXIuZWxlbWVudC5maW5kKCcubWRsLW5hdmlnYXRpb25fX2xpbmsnKS5jbGljaygoZSk9PntcbiAgICAgIGxldCByb3V0ZSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgIHRoaXMuYWN0aXZhdGVSb3V0ZShyb3V0ZS50cmltKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBkZWZhdWx0IHJvdXRlLCBhY3RpdmF0ZSBpdCBhbmQgYWRkIGl0IGluIHRvIHRoZSBib2R5XG4gICAgaWYodGhpcy5kZWZhdWx0Um91dGUpe1xuICAgICAgdGhpcy5hY3RpdmF0ZVJvdXRlKHRoaXMuZGVmYXVsdFJvdXRlKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmF0ZVJvdXRlKHJvdXRlKXtcbiAgICBsZXQgY29udGVudCA9IHRoaXMudGl0bGVCYXIuZWxlbWVudC5maW5kKCcucGFnZS1jb250ZW50Jyk7XG4gICAgY29udGVudC5lbXB0eSgpO1xuXG4gICAgdGhpcy5yb3V0ZU1hcFtyb3V0ZV0uYXBwZW5kVG9FbGVtZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgYWRkUm91dGUoaWQsIHBhZ2VPYmplY3QsIGRlZmF1bHRSb3V0ZSA9IGZhbHNlKXtcbiAgICAvL2FkZCBsaW5rIHRvIHRpdGxlIGJhclxuICAgIHRoaXMudGl0bGVCYXIuYWRkTGluayhpZCwgJycpO1xuXG4gICAgLy9rbm93IHdoZXJlIHRvIHJvdXRlXG4gICAgdGhpcy5yb3V0ZU1hcFtpZF0gPSBwYWdlT2JqZWN0O1xuXG4gICAgaWYoZGVmYXVsdFJvdXRlKXtcbiAgICAgIHRoaXMuZGVmYXVsdFJvdXRlID0gaWQ7XG4gICAgfVxuXG5cbiAgfVxufVxuXG5sZXQgUm91dGVzID0gbmV3IEFwcGxpY2F0aW9uQmFzZSgnRmxlZXQgU2VydmljZScpO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7IiwiaW1wb3J0IHtCYXNlRWxlbWVudH0gZnJvbSAnLi4vdWkvYmFzZS1lbGVtZW50LmpzJztcblxuLy90aGlzIHdvdWxkIGV4dGVuZCBvdGhlciBpdGVtcyBsaWtlIGEgZm9vdGVyIG9yIHNpZGViYXIgZXRjIGJyZWFkY3J1bWJzIG9uIHRoZSBwYWdlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VFbGVtZW50e1xuICBjb25zdHJ1Y3RvcihwYWdlVGl0bGUpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVGl0bGUgPSBwYWdlVGl0bGU7XG4gIH1cbn0iLCJpbXBvcnQge1BhZ2V9IGZyb20gJy4vZnJhbWV3b3JrL3BhZ2UuanMnO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSAnLi91aS9pbWFnZS5qcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi91aS9idXR0b24uanMnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL2ZyYW1ld29yay9hcHAtYmFzZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCdIb21lJyk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCl7XG4gICAgLy9jcmVhdGUgZWxlbWVudCBwcm9wZXJseSB3aXRoIG5ldyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGhlcmVcbiAgICBzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBsZXQgaSA9IG5ldyBJbWFnZSgnYXNzZXRzL2ltYWdlcy9kcm9uZS5wbmcnKTtcbiAgICBpLmFwcGVuZFRvRWxlbWVudCh0aGlzLmVsZW1lbnQpOyAvL3RoaXMuZWxlbWVudCBnZXRzIGNyZWF0ZWQgaW5pdGlhbGx5IGluIHN1cGVyLmNyZWF0ZUVsZW1lbnQoKSAtPiB0aGlzIGlzIHRoZSBkaXYgdGhhdCBnZXRzIGNyZWF0ZWQgYmVsb3dcbiAgICBcbiAgICBsZXQgc3R5bGVTdHJpbmcgPSAnd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDgwcHg7IGZvbnQtc2l6ZTogMTZweDsnO1xuICAgIGxldCBiID0gbmV3IEJ1dHRvbignU2VsZiBEcml2aW5nIENhcnMnKTtcbiAgICBiLmFwcGVuZFRvRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuICAgIGIuZWxlbWVudC5jbGljaygoKSA9PiB7XG4gICAgICBSb3V0ZXMuYWN0aXZhdGVSb3V0ZSgnQ2FycycpXG4gICAgfSk7XG4gICAgXG4gICAgYiA9IG5ldyBCdXR0b24oJ0Ryb25lcycpO1xuICAgIGIuc2V0U3R5bGVTdHJpbmcoc3R5bGVTdHJpbmcpO1xuICAgIGIuYXBwZW5kVG9FbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgYi5lbGVtZW50LmNsaWNrKCgpID0+IHtcbiAgICAgIFJvdXRlcy5hY3RpdmF0ZVJvdXRlKCdEcm9uZXMnKVxuICAgIH0pO1xuXG4gIH1cblxuICBnZXRFbGVtZW50U3RyaW5nKCkge1xuICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjwvZGl2PmA7XG4gIH1cbn0iLCJpbXBvcnQge1BhZ2V9IGZyb20gJy4vZnJhbWV3b3JrL3BhZ2UuanMnO1xuaW1wb3J0IHtHb29nbGVNYXB9IGZyb20gJy4vdWkvZ29vZ2xlLW1hcHMuanMnO1xuaW1wb3J0IEZsZWV0RGF0YVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9mbGVldC1kYXRhLXNlcnZpY2UuanMnO1xuXG5leHBvcnQgY2xhc3MgTWFwUGFnZSBleHRlbmRzIFBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoJ01hcCcpOy8vcGFnZSB0aXRsZVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpe1xuICAgIC8vY3JlYXRlIGVsZW1lbnQgcHJvcGVybHkgd2l0aCBuZXcgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBoZXJlXG4gICAgc3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgbGV0IGcgPSBuZXcgR29vZ2xlTWFwKHtsYXQ6IDQwLjc3MTk1NiwgbG5nOiAtNzMuOTc4NTMxfSwgRmxlZXREYXRhU2VydmljZSk7XG4gICAgZy5hcHBlbmRUb0VsZW1lbnQodGhpcy5lbGVtZW50KTtcblxuICB9XG5cbiAgZ2V0RWxlbWVudFN0cmluZygpIHtcbiAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJtYXJnaW46IDIwcHhcIj48aDM+TWFwPC9oMz48L2Rpdj5gO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIERhdGFFcnJvcntcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgZGF0YSl7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59IiwiaW1wb3J0IHtDYXJ9IGZyb20gJy4uL2NsYXNzZXMvY2FyLmpzJztcbmltcG9ydCB7RHJvbmV9IGZyb20gJy4uL2NsYXNzZXMvZHJvbmUuanMnO1xuaW1wb3J0IHtEYXRhRXJyb3J9IGZyb20gJy4vZGF0YS1lcnJvcnMuanMnO1xuXG5jbGFzcyBGbGVldERhdGFTZXJ2aWNlQ2xhc3N7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmNhcnMgPSBbXTtcbiAgICB0aGlzLmRyb25lcyA9IFtdO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gIH1cblxuICBsb2FkRGF0YShkYXRhKXtcbiAgICBmb3IoIGxldCBpdGVtIG9mIGRhdGEpe1xuXG4gICAgICBzd2l0Y2ggKGl0ZW0udHlwZSl7XG4gICAgICAgIGNhc2UgJ2Nhcic6XG4gICAgICAgICAgLy92YWxpZGF0ZSBkYXRhIGZpcnN0XG4gICAgICAgICAgaWYodGhpcy52YWxpZGF0ZUNhckRhdGEoaXRlbSkpe1xuICAgICAgICAgICAgbGV0IGNhciA9IEZsZWV0RGF0YVNlcnZpY2VDbGFzcy5sb2FkQ2FyKGl0ZW0pOyAvL2luc3RhbnRpYXRlIHJhdyBkYXRhIGhlcmUgYW5kIHRoZW4gcHVzaCBpdCBpbnRvIHRoZSBhcnJheVxuICAgICAgICAgICAgaWYoY2FyKXtcbiAgICAgICAgICAgICAgdGhpcy5jYXJzLnB1c2goY2FyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBlID0gbmV3IERhdGFFcnJvcignSW52YWxpZCBDYXIgRGF0YScsIGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkcm9uZSc6XG4gICAgICAgICAgbGV0IGRyb25lID0gRmxlZXREYXRhU2VydmljZUNsYXNzLmxvYWREcm9uZShpdGVtKTtcbiAgICAgICAgICB0aGlzLmRyb25lcy5wdXNoKGRyb25lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBsZXQgZSA9IG5ldyBEYXRhRXJyb3IoJ0ludmFsaWQgVmVoaWNsZTogVHlwZScsIGl0ZW0pO1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgXG4gIHZhbGlkYXRlQ2FyRGF0YShjYXIpe1xuICAgIGxldCByZXF1aXJlZFByb3BzID0gJ2xpY2Vuc2UgbW9kZWwgbGF0TG9uZyBtaWxlIG1ha2UnLnNwbGl0KCcgJyk7IC8vc3BsaXQgaW50byBhcnJheSBieSBzcGFjZVxuICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAvL2xvb3AgdGhyb3VnaCBhbmQgY2hlY2sgdGhhdCBlYWNoIGNhciBoYXMgdGhhdCBmaWVsZFxuICAgIGZvcihsZXQgZmllbGQgb2YgcmVxdWlyZWRQcm9wcykge1xuICAgICAgaWYoIWNhcltmaWVsZF0pe1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCBuZXcgRGF0YUVycm9yKGBJbnZhbGlkIGZpZWxkICR7ZmllbGR9YCwgY2FyKSApO1xuICAgICAgICAvL2NhbiBjcmVhdGUgbW9yZSBjaGVja3Mgb24gZGF0YVxuICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNhci5taWxlcykpKXtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCggbmV3IERhdGFFcnJvcignSW52YWxpZCBNaWxhZ2UgaXMgbm90IGEgbnVtYmVyJywgY2FyKSApO1xuICAgICAgICAvL2NhbiBjcmVhdGUgbW9yZSBjaGVja3Mgb24gZGF0YVxuICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWhhc0Vycm9yczsgLy9pZiBoYXMgZXJyb3JzIHRoaXMgcmV1dHJucyBmYWxzZSBhbmQgZmFpbHMgb3VyIG90aGVyIHN0YXRlbWVudCBhYm92ZSAtIGtpbmRhIGZ1bmt5XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FyQnlMaWNlbnNlKGxpY2Vuc2Upe1xuICAgIFxuICAgIHJldHVybiB0aGlzLmNhcnMuZmluZCggKGNhcikgPT4ge1xuICAgICAgcmV0dXJuIGNhci5saWNlbnNlID09PSBsaWNlbnNlO1xuICAgIH0pO1xuXG4gICAgXG4gIH1cblxuICBnZXRDYXJzU29ydGVkQnlMaWNlbnNlKGNhcnNBcnJheSl7XG5cbiAgICByZXR1cm4gdGhpcy5jYXJzLnNvcnQoIChjYXIxLCBjYXIyKSA9PiB7XG4gICAgICAvL2lmIHdlIHJldHVybiAtMSwgdGhhdCBtZWFucyBjYXIxIGNvbWVzIGZpcnN0XG4gICAgICBpZiggY2FyMS5saWNlbnNlTnVtIDwgY2FyMi5saWNlbnNlTnVtKXtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYoIGNhcjEubGljZW5zZU51bSA+IGNhcjIubGljZW5zZU51bSl7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcblxuICB9XG5cbiAgZmlsdGVyQ2Fyc0J5TWFrZShmaWx0ZXIpe1xuICAgIHJldHVybiB0aGlzLmNhcnMuZmlsdGVyKChjYXIpPT57XG4gICAgICByZXR1cm4gY2FyLm1ha2UuaW5kZXhPZihmaWx0ZXIpID49IDA7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbG9hZENhcihjYXIpe1xuICAgIHRyeXtcbiAgICAgIGxldCBjID0gbmV3IENhcihjYXIubGljZW5zZSwgY2FyLm1vZGVsLCBjYXIubGF0TG9uZyk7XG4gICAgICBjLm1pbGVzID0gY2FyLm1pbGVzO1xuICAgICAgYy5tYWtlID0gY2FyLm1ha2U7XG4gICAgICByZXR1cm4gYztcbiAgICB9Y2F0Y2goZSl7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBEYXRhRXJyb3IoJ2Vycm9yIGxvYWRpbmcgY2FyJywgY2FyKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBsb2FkRHJvbmUoZHJvbmUpe1xuXG4gICAgdHJ5e1xuICAgICAgbGV0IGQgPSBuZXcgRHJvbmUoZHJvbmUubGljZW5zZSwgZHJvbmUubW9kZWwsIGRyb25lLmxhdExvbmcpO1xuICAgICAgZC5haXJ0aW1laG91cnMgPSBkcm9uZS5haXJUaW1lSG91cnM7XG4gICAgICBkLmJhc2UgPSBkcm9uZS5iYXNlO1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgRGF0YUVycm9yKCdlcnJvciBsb2FkaW5nIGNhcicsIGRyb25lKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxufVxuXG5sZXQgRmxlZXREYXRhU2VydmljZSA9IG5ldyBGbGVldERhdGFTZXJ2aWNlQ2xhc3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgRmxlZXREYXRhU2VydmljZTsiLCJcbi8qXG4gVGhlIGJhc2UgZWxlbWVudCBpcyBpbnRlbmRlZCB0byBleHRlbmQgYSBjbGFzcyBzbyB0aGF0IHdoZW4geW91IGNyZWF0ZSBhIE5FVyBlbG1lbnQgbGlrZSBidXR0b24sIHlvdSBjYW4gc3BlY2lmaXkgYW55XG4gIEhUTUwgdGhhdCBnZXRzIGNyZWF0ZWQgYW5kIGl0IGF1dG9tYXRpY2FsbHkgY3JlYXRlcyB0aGF0IEhUTUwgb2JqZWN0IHdyYXBwZWQgYXMgYSBqcXVlcnkgb2JqZWN0LlxuICBcbiAgRmlyc3QgeW91IGNyZWF0ZSBhIG5ldyBjbGFzcyB0aGF0IGV4dGVuZHMgdGhpcyBjbGFzcyBhbmQgb3ZlcndyaXRlIHRoZSBzdHJpbmcgdG8gd2hhdGV2ZXIgaHRtbCB5b3UgbmVlZC5cbiAgVGhlbiB5b3UganVzdCBhZGQgaW4gdGhlIGVsZW1lbnQgaXQgc2hvdWxkIGFwcGVuZCB0by5cbiAgdGhpcy5lbGVtZW50IHdpbGwgcmVmZXIgdG8gdGhlIHN0cmluZyBlbGVtZW50IHRoYXQgZ2V0cyBjcmVhdGVkIHdpdGggYSBORVcgY2xhc3MgZ2V0cyBpbnN0YW50aWF0ZWQuXG4gKi9cblxuZXhwb3J0IGNsYXNzIEJhc2VFbGVtZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgXG4gICAgLy9KUSBPYmplY3RcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIFxuICB9XG4gIFxuICBhcHBlbmRUb0VsZW1lbnQoZWwpe1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIGVsLmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuZW5hYmxlSlMoKTtcbiAgfVxuICBcbiAgY3JlYXRlRWxlbWVudCgpe1xuICAgIGxldCBzID0gdGhpcy5nZXRFbGVtZW50U3RyaW5nKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gJChzKTtcbiAgfVxuICBcbiAgZ2V0RWxlbWVudFN0cmluZygpe1xuICAgIHRocm93ICdQbGVhc2Ugb3ZlcnJpZGUgZ2V0RWxlbWVudFN0cmluZyBpbiBiYXNlIEVsZW1lbnQnO1xuICB9XG5cbiAgZW5hYmxlSlMoKXtcbiAgICAvL01hdGVyaWFsIGxpdGUgdG8gZW5hYmxlIEpTIG9uIGJ1dHRvbiBjbGlja3NcbiAgICAvL25vdCBzdXJlIHdoZXJlIGhlIGdvdCB0aGlzIGZyb20gLSBuZWVkIHRvIGdvb2dsZSBpdCBpZiBJIHVzZSBtYXRlcmlhbCBMaXRlIGV2ZXJcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuZWxlbWVudFswXSk7XG4gIH1cbiAgXG59IiwiaW1wb3J0IHtCYXNlRWxlbWVudH0gZnJvbSAnLi9iYXNlLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnN0eWxlU3RyaW5nID0gJyc7XG4gIH1cblxuICBzZXRTdHlsZVN0cmluZyhzdHlsZSl7XG4gICAgdGhpcy5zdHlsZVN0cmluZyA9IHN0eWxlO1xuICB9XG5cbiAgZ2V0RWxlbWVudFN0cmluZygpe1xuICAgICByZXR1cm4gYFxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1idXR0b24tLWFjY2VudFwiXG4gICAgICAgICAgICBzdHlsZT1cIiR7dGhpcy5zdHlsZVN0cmluZ31cIlxuICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMudGl0bGV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICBgO1xuICB9XG5cbn0iLCJpbXBvcnQge0Jhc2VFbGVtZW50fSBmcm9tICcuL2Jhc2UtZWxlbWVudC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG5cbiAgY29uc3RydWN0b3IoaGVhZGVycywgZGF0YSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXRFbGVtZW50U3RyaW5nKCl7XG4gICAgbGV0IHRoSGVhZGVycyA9ICcnO1xuICAgIGZvcihsZXQgaCBvZiB0aGlzLmhlYWRlcnMpe1xuICAgICAgdGhIZWFkZXJzICs9IGBcbiAgICAgICAgPHRoIGNsYXNzPVwibWRsLWRhdGEtdGFibGVfX2NlbGwtLW5vbi1udW1lcmljXCI+JHtofTwvdGg+XG4gICAgICBgO1xuICAgIH1cbiAgICBcblxuICAgIGxldCB0clRhZ3MgPSAnJztcbiAgICBmb3IoIGxldCByb3cgb2YgdGhpcy5kYXRhICl7XG4gICAgICB0clRhZ3MgKz0gYDx0cj5gO1xuXG4gICAgICAgIGxldCB0ZFRhZ3MgPScnO1xuXG4gICAgICAgIC8vbG9vcCB0aHJvdWdoIGhlYWRlcnMgYXJyYXkgdG8gcHVsbCBvdXQgZmlsZWRzIG9mIGRhdGEgd2Ugd2lsbCBuZWVkXG4gICAgICAgIGZvciggbGV0IHByb3BlcnR5IG9mIHRoaXMuaGVhZGVycyl7XG4gICAgICAgICAgbGV0IGZpZWxkID0gcm93W3Byb3BlcnR5LnRvTG93ZXJDYXNlKCldOyAvL211c3QgbWFrZSB0aGUgZmllbGQgbG93ZXJjYXNlIHRvIGFjY2VzcyB0aGUgbmFtZSBwcm9wZXJseSBpbiB0aGUgYXJyYXlcbiAgICAgICAgICB0clRhZ3MgKz0gYFxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibWRsLWRhdGEtdGFibGVfX2NlbGwtLW5vbi1udW1lcmljXCI+JHtmaWVsZH08L3RkPlxuICAgICAgICAgIGA7XG4gICAgICAgIH1cblxuICAgICAgdHJUYWdzICs9IGA8L3RyPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBcbiAgICAgIDx0YWJsZSBjbGFzcz1cIm1kbC1kYXRhLXRhYmxlIG1kbC1qcy1kYXRhLXRhYmxlIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgJHt0aEhlYWRlcnN9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgJHt0clRhZ3N9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICBgO1xuICB9XG5cbn0iLCJpbXBvcnQge0Jhc2VFbGVtZW50fSBmcm9tICcuL2Jhc2UtZWxlbWVudC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVNYXAgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG5cbiAgY29uc3RydWN0b3IoY2VudGVyT2ZNYXAsIGRhdGEpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jZW50ZXJPZk1hcCA9IGNlbnRlck9mTWFwO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICAvL292ZXJ3cml0ZSBvcmlnaW5hbCBjcmVhdGUgZWxlbWVudCBmdW5jdGlvblxuICBjcmVhdGVFbGVtZW50KCl7XG4gICAgbGV0IGRhdGFBcnJheSA9IFtdO1xuXG4gICAgZm9yKCBsZXQgYyBvZiB0aGlzLmRhdGEuY2FycyApe1xuICAgICAgZGF0YUFycmF5LnB1c2goYyk7XG4gICAgfVxuXG4gICAgZm9yKCBsZXQgZCBvZiB0aGlzLmRhdGEuZHJvbmVzICl7XG4gICAgICBkYXRhQXJyYXkucHVzaChkKTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuY3JlYXRlRWxlbWVudCgpOyAvL2NhbGwgb3JpZ2luYWwgZnVuY3Rpb24gYW5kIHRoZW4gY29udGludWUgd2l0aCBnb29nbGUgY29kZVxuXG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuXG4gICAgICBsZXQgbWFwID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXJPZk1hcCxcbiAgICAgICAgem9vbTogMTNcbiAgICAgIH0pO1xuXG4gICAgICBmb3IoIGxldCB2ZWhpY2xlIG9mIGRhdGFBcnJheSApe1xuXG4gICAgICAgIGxldCBbbGF0LCBsb25nXSA9IHZlaGljbGUubGF0TG9uZy5zcGxpdCgnICcpO1xuICAgICAgICBjb25zb2xlLmxvZyhsYXQpO1xuICAgICAgICBjb25zb2xlLmxvZyh2ZWhpY2xlKTtcbiAgICAgICAgbGV0IG15TGF0TG5nID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5MYXRMbmcobGF0LCBsb25nKTtcblxuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgcG9zaXRpb246IG15TGF0TG5nLFxuICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcmtlci5zZXRNYXAobWFwKTtcblxuICAgICAgfVxuXG4gICAgfSwxMDApO1xuICB9XG5cbiAgZ2V0RWxlbWVudFN0cmluZygpe1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT1cIndpZHRoOjgwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPjwvZGl2PlxuICAgICBgO1xuICB9XG5cbn0iLCJpbXBvcnQge0Jhc2VFbGVtZW50fSBmcm9tICcuL2Jhc2UtZWxlbWVudC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZSBleHRlbmRzIEJhc2VFbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvcihmaWxlTmFtZSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gIH1cblxuICBnZXRFbGVtZW50U3RyaW5nKCl7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuZmlsZU5hbWV9XCIgc3R5bGU9XCJ3aWR0aDoxMDAlOyBtYXgtd2lkdGg6MzAwcHg7XCI+XG4gICAgIGA7XG4gIH1cblxufSIsImltcG9ydCB7QmFzZUVsZW1lbnR9IGZyb20gJy4vYmFzZS1lbGVtZW50LmpzJztcblxuZXhwb3J0IGNsYXNzIFRpdGxlQmFyIGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmxpbmtzID0gW107XG4gIH1cblxuICBhZGRMaW5rKHRpdGxlLCBocmVmKXtcbiAgICAvL2VzNiBpbXBseXMgdGhlIG5hbWUgaXMgdGhlIHNhbWUgYXMgdGhlIHZhcmlhYmxlIG5hbWVcbiAgICAvL290aGVyd2lzZSB5b3UgY2FuIHNwZWNpZnkgdGl0bGU6IHRpdGxlIG9yIHNvbWV0aGluZyBlbHNlIGlmIHlvdSB3YW50XG4gICAgdGhpcy5saW5rcy5wdXNoKHtcbiAgICAgIHRpdGxlLFxuICAgICAgaHJlZlxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RWxlbWVudFN0cmluZygpe1xuICAgIGxldCBsaW5rcyA9ICcnO1xuXG4gICAgZm9yKGxldCBsaW5rIG9mIHRoaXMubGlua3Mpe1xuICAgICAgbGlua3MgKz0gYFxuICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgXG4gICAgICAgICAgID4ke2xpbmsudGl0bGV9PC9hPlxcbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dCBtZGwtanMtbGF5b3V0IG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlclwiPlxuICAgICAgPGhlYWRlciBjbGFzcz1cIm1kbC1sYXlvdXRfX2hlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9faGVhZGVyLXJvd1wiPlxuICAgICAgICAgIDwhLS0gVGl0bGUgLS0+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8IS0tIEFkZCBzcGFjZXIsIHRvIGFsaWduIG5hdmlnYXRpb24gdG8gdGhlIHJpZ2h0IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxuICAgICAgICAgIDwhLS0gTmF2aWdhdGlvbi4gV2UgaGlkZSBpdCBpbiBzbWFsbCBzY3JlZW5zLiAtLT5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibWRsLW5hdmlnYXRpb24gbWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHlcIj5cbiAgICAgICAgICAgICR7bGlua3N9XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9fZHJhd2VyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dC10aXRsZVwiPiR7dGhpcy50aXRsZX08L3NwYW4+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJtZGwtbmF2aWdhdGlvblwiPlxuICAgICAgICAgICR7bGlua3N9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzcz1cIm1kbC1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPjwhLS0gWW91ciBjb250ZW50IGdvZXMgaGVyZSAtLT48L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgICAgYDtcbiAgfVxuXG59Il19
