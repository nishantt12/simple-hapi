const Users = require('./test.controller.js');


module.exports = {
    get: {
        method: 'GET',
        path: "/test",
        handler: Users.get,
        config: {
            description: 'get all users'
        }
    },
    createuser: {
        method: 'GET',
        path: "/test/create",
        handler: Users.create,
        config: {
            description: 'get all users'
        }
    }
}
