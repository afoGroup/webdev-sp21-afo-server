const mongoose = require('mongoose');

const clubsSchema = mongoose.Schema(
    {
            _id: String,
            title: String,
            description: String,
            createdDate: String,
            animeId: String,
            owner: {type: String, ref: 'UsersModel' },
            members: [{type: String, ref: 'UsersModel' }],
            posts: [{type: String, ref: 'PostsModel' }]
    },
    {collection: 'clubs'});

module.exports = clubsSchema;