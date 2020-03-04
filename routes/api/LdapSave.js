const express = require('express');
const router = express.Router();
const passport = require('passport');

// Item Model
// const Item = require('../../models/Item');

// @route   POST api/items
// @des     Create an Item
// @access  Public 
{
    console.log("api Called Ldpsave")
}

// var login = function (req, res, next) {
//     passport.authenticate('ldap', (err, user) => {
//         if (err) {
//             res.status(401).json({ success: false, message: err.message })
//             return
//         }
//         if (!user) {
//             res.status(401).json({ success: false, message: 'User cannot be found' })
//         } else {
//             req.login(user, loginErr => {
//                 if (loginErr) {
//                     return next(loginErr);
//                 }
//                 _insertFunc(user).then(user => {
//                     var userObj = typeof (user.toObject) === "function" ? user.toObject() : user
//                     return res.json({ success: true, message: 'authentication succeeded', user: userObj })
//                 })
//             })
//         }
//     })(req, res, next)
// }

// router.route('/login').post(login)

// router.route('/login').post(
//     passport.authenticate('ldapauth', { session: false }), function (req, res) {
//     { console.log(OPTS.server.searchFilter) }
//     res.send({ status: 'ok' });
// });

// function ensureAuthenticated(req, res, next) {
//     if (!req.user) {
//         res.status(401).json({ success: false, message: "not logged in" })
//     } else {
//         next()
//     }
// }

// router.get("/api/user", ensureAuthenticated, function (req, res) {
//     res.json({ success: true, user: req.user })
// })

router
module.exports = router;