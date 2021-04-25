const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        _id: String,
        title: String,
        text: String,
        createdDate: String,
        owner: {type: String, ref: 'UsersModel' }
    },
    {collection: 'posts'});

module.exports = postsSchema;