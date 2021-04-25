const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
            username: String,
            password: String,
            userType: {type: String, enum:["weeb", "otaku"]},
            email: String,
            bio: String,
            twitter: String,
            instagram: String,
            pictureURL: String,
            clubs: [{type: String, ref: 'ClubsModel' }],
            ownerClubs: [{type: String, ref: 'ClubsModel' }]
    },
    {collection: 'users'});

module.exports = usersSchema;