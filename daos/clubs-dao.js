const clubsModel = require('../models/clubs/clubs-model');

const findAllClubs = () => clubsModel.find();
const findClubById = (clubId) => clubsModel.findById(clubId);
const findClubsByTitle = (clubTitle) => clubsModel.find({title:clubTitle});
const findClubsById = (clubIds) => clubsModel.find({_id: clubIds});
const createClub = (club) => clubsModel.create(club);
const updateClub = (club) => clubModel.updateOne({_id:club._id},club);
const deleteClub = (clubId) => clubModel.remove({_id: clubId}, {justOne: true});

module.exports = {
    findAllClubs,
    findClubById,
    findClubsByTitle,
    findClubsById,
    createClub,
    updateClub,
    deleteClub
};