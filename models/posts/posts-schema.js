const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        text: String,
        createdDate: Date,
        ownerId: String,
        groupId: String
    },
    {collection: 'posts', versionKey: false});

module.exports = postsSchema;