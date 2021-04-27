const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        text: String,
        createdDate: Date,
        owner: String
    },
    {collection: 'posts', versionKey: false});

module.exports = postsSchema;