const mongoose = require('mongoose');

const clubsSchema = mongoose.Schema(
    {
            title: String,
            description: String,
            createdDate: String,
            animeId: String,
            pictureURL: String,
            owner: {type: String, ref: 'UsersModel' },
            posts: [{type: String, ref: 'PostsModel' }]
    },
    {collection: 'clubs'});

module.exports = clubsSchema;