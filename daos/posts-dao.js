const postsModel = require('../models/posts/posts-model');
const clubsModel = require('../models/clubs/clubs-model');

const findAllPosts = () => postsModel.find();
const findPostById = (postId) => postsModel.findById(postId);
const createPost = (clubId, post) => postsModel.create(post);
const deletePost = (postId) =>  postsModel.remove({_id: postId}, true);

const findPostsForClub = (clubId) => clubsModel.findById(clubId)
    .populate('posts').then(club => club.posts);

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    deletePost
};