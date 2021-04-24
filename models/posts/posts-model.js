const mongoose = require('mongoose');
const postSchema = require('./posts-schema');

const postModel = mongoose.model(
    'PostModel',
    postSchema
);

module.exports = postModel;