const clubsDao = require('../daos/clubs-dao');

const findAllClubs = () => clubsDao.findAllClubs();
const findClubById = (clubId) => clubsDao.findClubById(clubId);
const findClubsByTitle = (clubTitle) => clubsDao.findClubsByTitle(clubTitle);
const findClubsById = (clubIds) => clubsDao.findClubsById(clubIds);
const createClub = (club) => clubsDao.createClub(club);
const updateClub = (club) => clubsDao.updateClub(club);
const deleteClub = (clubId) => clubsDao.deleteClub(clubId);
const deleteManyClubs = (ownerId) => clubsDao.deleteManyClubs(ownerId);

module.exports = {
    findAllClubs,
    findClubById,
    findClubsByTitle,
    findClubsById,
    createClub,
    updateClub,
    deleteClub,
    deleteManyClubs
};
