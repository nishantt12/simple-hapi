'use strict';
var _ = require('lodash');

var all = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 9000,
    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    }

}

var merger = _.merge(all, require('./'+all.env+'.js'));

console.dir(merger, { depth: null, colors: true });

module.exports = merger;


