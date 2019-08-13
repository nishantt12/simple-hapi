'use strict'

var User = require('./test.models.js');

module.exports = {
    get: (req, reply)=> {
        reply("test")
    },
    
    create: (req, reply)=>{
        var body = {
            className: "Nishant"
        }
        User.create(body, function (err, Planner) {
            if (err) { return handleError(res, err); }
            return reply(Planner);
        });
    }
    
    
}
