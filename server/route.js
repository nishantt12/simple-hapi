'use strict'

const Path = require('path');
const Users = require('./api/user');
const Test = require('./api/test');


var routes = []
var routers = []

routers.push(Users)
routers.push(Test)

var walkThroughRoutes = (Routers) => {
    Routers.forEach(function (eachRoute) {
        Object.keys(eachRoute).forEach(function (routeName) {
            routes.push(eachRoute[routeName]);
        });
    })

}

walkThroughRoutes(routers)


module.exports = routes;

