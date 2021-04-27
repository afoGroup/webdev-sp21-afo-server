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

    app.post('/api/search/users/:username', (req, res) => {
        return usersService.findUserByUsername(req.params['username'])
            .then(userArray => res.send(userArray))
    });

    app.post('/api/login', (req, res) => {
        return usersService.login(req.body)
            .then(user => {
                if(user){
                    req.session["currentUser"] = user;
                    res.send(user)
                } else{
                    res.send("invalid username-password combination")
                }
            })
    });

    app.post('/api/logout', (req, res) => {
        const anonUser = {username: 'wbdv-afo-logged-out'}
        req.session["currentUser"] = anonUser;
        res.send(anonUser);
    });

    app.post('/api/users/current', (req, res) => {
        const currentUser = req.session["currentUser"];
        if(currentUser === undefined) {
            const tempUser = {username: 'wbdv-afo-logged-out'};
            res.send(tempUser);
        } else {
            res.send(currentUser);
        }
    });

    app.post('/api/register', (req, res) => {
        const givenUser = req.body;
        return usersService.findUserByUsername(givenUser.username)
            .then((existingUser) => {
                if(existingUser){
                    res.send({message: "username already exists"})
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

    app.put('/api/users/:userId/update', (req, res) => {
        return usersService.updateUser(req.body)
            .then(user => {
                req.session['currentUser'] = req.body;
                res.send(user)
            })
    });

    app.delete('/api/users/:userId/remove', (req, res) =>
        usersService.deleteUser(req.params['userId'])
            .then(resultUser => {
                const anonUser = {username: 'wbdv-afo-logged-out'}
                req.session["currentUser"] = anonUser
                res.send(resultUser)
            }));
};