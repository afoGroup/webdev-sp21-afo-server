const usersService = require('../services/users-service');

module.exports = (app) => {

    app.get('/api/users', (req, res) => {
        return usersService.findAllUsers()
            .then(allUsers => res.send(allUsers))
    });

    app.get('/api/users/:userId', (req, res) => {
        return usersService.findUserById(req.params['userId'])
            .then(user => res.send(user))
    });

    app.get('/api/search/users/:username', (req, res) => {
        return usersService.findUserByUsername(req.params['username'])
            .then(user => res.send(user))
    });

    app.post('/api/login', (req, res) => {
        return usersService.login(req.body)
            .then(user => {
                if(user){
                    console.log("(user-controller)login in: " + user);
                    req.session['currentUser'] = user;
                    res.send(user)
                } else{
                    res.send("invalid username-password combination")
                }
            })
    });

    app.post('/api/logout', (req, res) => {
        req.session;
    });

    app.get('api/users/current', (req, res) => {
        const currentUser = req.session["currentUser"];
        if(currentUser){
            res.send(currentUser)
        } else {
            res.send("no current user")
        }
    });

    app.post('/api/register', (req, res) => {
        const givenUser = req.body;
        return usersService.findUserByUsername(givenUser.username)
            .then((existingUser) => {
                if(existingUser){
                    res.send("username already exists")
                } else{
                    usersService.createUser(givenUser)
                        .then(user => {
                            req.session['currentUser'] = user;
                            res.send(user);
                        });
                }
            })
    });

    app.post('/api/users/create', (req, res) => {
        return usersService.createUser(req.body)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(user);
            })
    });

    app.put('api/users/:userId/update', (req, res) => {
        return usersService.updateUser(req.body)
            .then(user => res.send(user))
    });

    app.delete('/api/users/:userId/remove', (req, res) => {
        return usersService.deleteUser(req.params['userId'])
            .then(user => res.send(user))
    });

};