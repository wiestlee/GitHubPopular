'use strict';
let window = global || window;
let url = {
    Start: { screen:require('../pages/setup') },
    Welcome :{screen:require('../pages/welcomePage')},
    Home :{screen:require('../pages/homePage')},
};

window.RouteConfig=url;




