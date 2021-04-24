const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        _id: String,
        username: String,
        password: String,
        userType: String,
        email: String,
        bio: String,
        twitter: String,
        instagram: String,
        pictureURL: String,
        clubs: [{type: String, ref: 'ClubsModel' }]
    },
    {collection: 'users'});

module.exports = usersSchema;