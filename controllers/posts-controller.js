const postsService = require('../services/posts-service');

module.exports = (app) => {

    app.get('/api/posts', (req, res) =>
        postsService.findAllPosts()
            .then(allPosts => res.json(allPosts)));

    app.get('/api/posts/:postId', (req, res) =>
        postsService.findPostById(req.params['postId'])
            .then(post => res.json(post)));

    app.post('/api/clubs/:clubId/posts/create', (req, res) =>
        postsService.createPost(req.params['clubId'], req.body)
            .then(post => res.send(post)));

    app.delete('/api/posts/:postId/remove', (req, res) =>
        postsService.deletePost(req.params['postId'])
            .then(resultPost => res.send(resultPost)));

};