const postsModel = require('../models/posts/posts-model');
const clubsModel = require('../models/clubs/clubs-model');

const findAllPosts = () => postsModel.find();
const findPostById = (postId) => postsModel.findById(postId);
const createPost = (clubId, post) => postsModel.create(post);
const deletePost = (postId) =>  postsModel.deleteOne({_id: postId});
const deleteManyPosts = (groupId) => postsModel.deleteMany({groupId: groupId});

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    deletePost,
    deleteManyPosts
};