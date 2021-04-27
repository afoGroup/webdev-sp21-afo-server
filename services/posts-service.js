const postsDao = require('../daos/posts-dao');

const findAllPosts = () => postsDao.findAllPosts();
const findPostById = (postId) => postsDao.findPostById(postId);
const createPost = (clubId, post) => postsDao.createPost(clubId, post);
const deletePost = (postId) => postsDao.deletePost(postId);
const deleteManyPosts = (groupId) => postsDao.deleteManyPosts(groupId);

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    deletePost,
    deleteManyPosts
};