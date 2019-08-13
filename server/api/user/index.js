const Users = require('./user.controller');


module.exports = {
    get: {
        method: 'GET',
        path: "/",
        handler: Users.get,
        config: {
            description: 'get all users'
        }
    },
    one: {
        method: 'GET',
        path: "/{id}",
        handler: Users.one,
        config: {
            description: 'get all users'
        }
    },

    update: {
        method: 'PUT',
        path: "/{id}",
        handler: Users.update,
        config: {
            description: 'get all users'
        }
    },

    updateOrCreate: {
        method: 'PUT',
        path: "/updateOrCreate",
        handler: Users.updateOrCreate,
        config: {
            description: 'get all users'
        }
    },

    delete: {
        method: 'DELETE',
        path: "/{id}",
        handler: Users.delete,
        config: {
            description: 'get all users'
        }
    },
    create: {
        method: 'POST',
        path: "/",
        handler: Users.create,
        config: {
            description: 'get all users'
        }
    }
}
