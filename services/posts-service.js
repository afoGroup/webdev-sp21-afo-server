const postsDao = require('../daos/posts-dao');

const findAllPosts = () => postsDao.findAllPosts();
const findPostById = (postId) => postsDao.findPostById(postId);
const findPostsForClub = (clubId) => postsDao.findPostsForClub(clubId);

module.exports = {
    findAllPosts,
    findPostById,
    findPostsForClub
};