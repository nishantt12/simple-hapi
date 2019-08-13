'use strict'

var User = require('./user.models');

module.exports = {
    get: (req, reply)=> {

        User.find()
            .then(function (err, users) {
                if (!err) {
                    return reply(users);
                }
                else{
                    console.log(err)
                    return reply(err);

                }
            })
    },

    create: (req, reply)=> {
        User.create(req.payload, function (err, Planner) {
            if (err) {
                return handleError(res, err);
            }
            return reply(Planner);
        });
    },


    one: (req, reply)=> {
        var id = req.params.id
        User.findById(id, function (err, user) {
            if (!err) {
                return reply(user);
            }
            else{
                console.log(err)
                return reply(err);
            }
        })

    },

    delete: (req, reply)=> {
        console.log("delete")
        var id = req.params.id
        User.findById(id, function (err, user) {
            if (!err) {
                user.remove(function (err) {
                    if (!err) {
                        return reply({message: "user deleted"});
                    }
                })


            }
        })

    },
    update: (req, reply)=> {
        console.log("update")
        var id = req.params.id
        User.updateOne({_id: id}, req.payload, function (err, user) {
            if (!err) {
                return reply(user);
            }
            else {
                return reply(err)
            }
        })

    },
    updateOrCreate: (req, reply)=> {
        console.log("update: " + req.payload.name)
        User.findOneAndUpdate({name: req.payload.name}, req.payload, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        }, function (err, user) {
            console.log("err: " + err);
            if (!err) {
                return reply(user);
            }
            else {
                return reply(err)
            }
        })

    }


}
