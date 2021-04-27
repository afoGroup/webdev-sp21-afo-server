const usersModel = require('../models/users/users-model');
const ObjectID = require('mongodb').ObjectID;

const findAllUsers = () =>
    usersModel.find();

const findUserById = (userId) =>
    usersModel.findById(userId);

const findUserByUsername = (givenUsername) =>
    usersModel.findOne({username:givenUsername});

const createUser = (newUser) =>
    usersModel.create(newUser);

const updateUser = (user) =>
    usersModel.updateOne({_id: new ObjectID(user._id)},
        {$set:
                {
                    password: user.password,
                    userType: user.userType,
                    email: user.email,
                    bio: user.bio,
                    instagram: user.instagram,
                    twitter: user.twitter,
                    pictureURL: user.pictureURL
                },
        });

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