const express = require('express');
const router = express.Router();
const locationService = require('./location.service');


router.get('/', getAll);

module.exports = router;


function getAll(req, res, next) {
    locationService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}