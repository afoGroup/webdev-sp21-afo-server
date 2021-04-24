const clubsModel = require('../models/clubs/clubs-model');

const findAllClubs = () => clubsModel.find();
const findClubById = (clubId) => clubsModel.findById(clubId);
const findClubByTitle = (clubTitle) => clubsModel.find({$text:{$search:clubTitle}});
const createClub = (club) => clubsModel.create(club);
const updateClub = (club) => clubModel.update({_id:club._id},club);
const deleteClub = (clubId) => clubModel.remove({_id: clubId}, {justOne: true});

module.exports = {
    findAllClubs,
    findClubById,
    findClubByTitle,
    createClub,
    updateClub,
    deleteClub
};