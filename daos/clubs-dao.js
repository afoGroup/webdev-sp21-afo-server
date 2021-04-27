const clubsModel = require('../models/clubs/clubs-model');
const ObjectID = require('mongodb').ObjectID;

const findAllClubs = () => clubsModel.find();
const findClubById = (clubId) => clubsModel.findById(clubId);
const findClubsByTitle = (clubTitle) => clubsModel.find({title:clubTitle});
const findClubsById = (clubIds) => clubsModel.find({_id: clubIds});
const createClub = (club) => clubsModel.create(club);
const updateClub = (club) => clubsModel.updateOne({_id: new ObjectID(club._id)},
    {$set:
            {
                description: club.description,
                pictureURL: club.pictureURL,
                posts: club.posts
            },
    });
const deleteClub = (clubId) => clubsModel.remove({_id: clubId}, {justOne: true});

module.exports = {
    findAllClubs,
    findClubById,
    findClubsByTitle,
    findClubsById,
    createClub,
    updateClub,
    deleteClub
};