const clubsDao = require('../daos/clubs-dao');

const findAllClubs = () => clubsDao.findAllClubs();
const findClubById = (clubId) => clubsDao.findClubById(clubId);
const findClubByTitle = (clubTitle) => clubsDao.findClubByTitle(clubTitle);
const createClub = (club) => clubsDao.createClub(club);
const updateClub = (club) => clubsDao.updateClub(club);
const deleteClub = (clubId) => clubsDao.deleteClub(clubId);

module.exports = {
    findAllClubs,
    findClubById,
    findClubByTitle,
    createClub,
    updateClub,
    deleteClub
};
