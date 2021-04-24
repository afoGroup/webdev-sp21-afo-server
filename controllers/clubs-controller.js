const clubsService = require('../services/clubs-service');

module.exports = (app) => {

    app.get('/api/clubs', (req, res) =>
        clubsService.findAllClubs()
            .then(allClubs => res.json(allClubs)));

    app.get('/api/clubs/:clubId', (req, res) =>
        clubsService.findClubById(req.params['clubId'])
            .then(club => res.json(club)));

    app.get('/api/search/club/:title', (req, res) =>
        clubsService.findClubByTitle(req.params['title'])
            .then(club => res.json(club)));

    app.post('/api/club/create', (req, res) =>
        clubsService.createClub(req.body)
            .then(club => res.send(club)));

    app.put('api/club/:clubId/update', (req, res) =>
        clubsService.updateClub(req.body)
            .then(club => res.send(club)));

    app.delete('/api/club/:clubId/remove', (req, res) =>
        clubsService.deleteClub(req.params['clubId'])
            .then(club => res.send(club)));
};