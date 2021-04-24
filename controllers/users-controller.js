const usersService = require('../services/users-service');

module.exports = (app) => {

    app.get('/api/users', (req, res) =>
        usersService.findAllUsers().then(allUsers => res.json(allUsers)));

    app.get('/api/users/:userId', (req, res) =>
        usersService.findUserById(req.params['userId']).then(user => res.json(user)));

    app.get('/api/search/user/:username', (req, res) =>
        usersService.findUserByUsername(req.params['username']).then(user));

    app.post('/api/register', (req, res) =>
        usersService.createUser(req.body).then(user => res.send(user)))

};