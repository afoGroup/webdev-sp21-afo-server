const usersDao = require('../daos/users-dao');

const findAllUsers = () => {return usersDao.findAllUsers()};
const findUserById = (userId) => {return usersDao.findUserById(userId)};
const findUserByUsername = (username) => {return usersDao.findUserByUsername(username)};
const createUser = (user) => {return usersDao.createUser(user)};
const updateUser = (user) => {return usersDao.updateUser(user)};
const deleteUser = (userId) => {return usersDao.deleteUser(userId)};
const login = (user) => {return usersDao.login(user)};


module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    updateUser,
    deleteUser,
    login
};
