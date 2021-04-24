const usersDao = require('../daos/users-dao');

const findAllUsers = () => usersDao.findAllUsers();
const findUserById = (userId) => usersDao.findUserById(userId);
const findUserByUsername = (username) => usersDao.findUserByUsername(username);
const createUser = (user) => usersDao.createUser(user);
const updateUser = (user) => usersDao.updateUser(user);
const deleteUser = (userId) => usersDao.deleteUser(userId);

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    updateUser,
    deleteUser
};
