const clubsDao = require('../daos/clubs-dao');

const findAllClubs = () => clubsDao.findAllClubs();
const findClubById = (clubId) => clubsDao.findClubById(clubId);
const findClubByTitle = (clubTitle) => clubsDao.findClubByTitle(clubTitle);

module.exports = {
    findAllClubs,
    findClubById,
    findClubByTitle
};
