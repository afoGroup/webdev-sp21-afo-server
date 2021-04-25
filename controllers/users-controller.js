const usersService = require('../services/users-service');

module.exports = (app) => {

    app.get('/api/users', (req, res) =>
        usersService.findAllUsers()
            .then(allUsers => res.json(allUsers)));

    app.get('/api/users/:userId', (req, res) =>
        usersService.findUserById(req.params['userId'])
            .then(user => res.json(user)));

    app.get('/api/search/users/:username', (req, res) =>
        usersService.findUserByUsername(req.params['username'])
            .then(user => res.json(user)));

    app.get('/api/login', (req, res) =>
        usersService.login(req.body)
            .then(user => {
                if(user){
                    req.session['currentUser'] = user;
                    res.send(user)
                } else{
                    res.send(403)
                }
            }));

    app.post('/api/users/create', (req, res) =>
        usersService.createUser(req.body)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(user);
            }));

    app.put('api/users/:userId/update', (req, res) =>
        usersService.updateUser(req.body)
            .then(user => res.send(user)));

    app.delete('/api/users/:userId/remove', (req, res) =>
        usersService.deleteUser(req.params['userId'])
            .then(user => res.send(user)));
};