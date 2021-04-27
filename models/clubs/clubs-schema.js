const mongoose = require('mongoose');

const clubsSchema = mongoose.Schema(
    {
            title: String,
            description: String,
            createdDate: String,
            animeId: String,
            pictureURL: String,
            owner: String,
            posts: [String]
    },
    {collection: 'clubs', versionKey: false});

module.exports = clubsSchema;