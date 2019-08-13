const Hapi = require('hapi');
const Mongoose = require("mongoose");
const Routes = require('./route.js');

var config = require('./config/environment');

Mongoose.connect(config.mongo.uri, config.mongo.options);

const server = new Hapi.Server();

server.connection({
    host: config.ip,
    port: config.port
});

server.route(Routes);

//start the server
server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server Running at PORT ${server.info.port}`);

});


