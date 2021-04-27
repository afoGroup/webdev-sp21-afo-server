const clubsService = require('../services/clubs-service');

module.exports = (app) => {

    app.get('/api/clubs', (req, res) =>
        clubsService.findAllClubs()
            .then(allClubs => res.json(allClubs)));

    app.get('/api/clubs/:clubId', (req, res) =>
        clubsService.findClubById(req.params['clubId'])
            .then(club => res.json(club)));

    app.get('/api/search/clubs-title/:title', (req, res) =>
        clubsService.findClubsByTitle(req.params['title'])
            .then(club => res.json(club)));

    app.post('/api/search/clubs-id', (req, res) =>
        clubsService.findClubsById(req.body)
            .then(clubs => res.json(clubs)));

    app.post('/api/clubs/create', (req, res) =>
        clubsService.createClub(req.body)
            .then(club => res.send(club)));

    app.put('/api/clubs/:clubId/update', (req, res) => {
        return clubsService.updateClub(req.body)
            .then(club => res.send(club))
    });

    app.delete('/api/clubs/:clubId/remove', (req, res) =>
        clubsService.deleteClub(req.params['clubId'])
            .then(resultClub => res.send(resultClub)));

};