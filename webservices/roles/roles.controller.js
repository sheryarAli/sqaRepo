const express = require('express');
const router = express.Router();
const roleService = require('./roles.service');


router.get('/', getAll);

module.exports = router;


function getAll(req, res, next) {
    roleService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}