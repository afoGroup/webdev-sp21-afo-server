const usersModel = require('../models/users/users-model');

const findAllUsers = () => usersModel.find();
const findUserById = (userId) => usersModel.findById(userId);
const findUserByUsername = (username) => usersModel.find({$text:{$search:username}});
const createUser = (user) => usersModel.create(user);
const updateUser = (user) => usersModel.update({_id:user._id},user);
const deleteUser = (userId) => usersModel.remove({_id: userId}, {justOne: true});

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    updateUser,
    deleteUser
};