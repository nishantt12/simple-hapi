'use strict'

module.exports = {
    ip: process.env.IP || undefined,
    mongo: {
        uri: 'mongodb://127.0.0.1/simple-hapi'
    }
}
