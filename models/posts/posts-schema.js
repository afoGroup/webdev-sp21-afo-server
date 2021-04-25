const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        text: String,
        createdDate: String,
        owner: {type: String, ref: 'UsersModel'}
    },
    {collection: 'posts'});

module.exports = postsSchema;