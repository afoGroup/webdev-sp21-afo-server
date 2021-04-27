const usersModel = require('../models/users/users-model');

const findAllUsers = () =>
    usersModel.find();

const findUserById = (userId) =>
    usersModel.findById(userId);

const findUserByUsername = (givenUsername) =>
    usersModel.findOne({username:givenUsername});

const createUser = (newUser) =>
    usersModel.create(newUser);

const updateUser = (user) =>
    usersModel.updateOne({_id:user._id}, {$set: user});

const deleteUser = (userId) =>
    usersModel.remove({_id: userId});

const login = (givenUser) =>
    usersModel.findOne({username: givenUser.username, password: givenUser.password});


module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    updateUser,
    deleteUser,
    login
};