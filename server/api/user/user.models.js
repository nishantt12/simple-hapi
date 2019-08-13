'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    password: String
});


UserSchema
    .pre('save', function (next) {
        var user = this;
        if (user.password) {
            bcrypt.hash(user.password, 10, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.password = hash;
                console.log("hash: " + hash);
                next();
            })
        } else {
            next();
        }

    });

module.exports = mongoose.model('User', UserSchema);

