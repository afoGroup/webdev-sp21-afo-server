const mongoose = require('mongoose');
const clubSchema = require('./clubs-schema');

const clubModel = mongoose.model(
    'ClubModel',
    clubSchema
);

module.exports = clubModel;