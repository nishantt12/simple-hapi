'use strict'

module.exports = {
    ip: process.env.IP || undefined,
    mongo: {
        uri: 'mongodb://mongo:27017/simple-hapi'
    }
}
