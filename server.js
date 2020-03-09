
const express = require('express');
const mongoose = require('mongoose');
const CONFIG = require('./config.js')
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const scdHoRoute = require('./routes/api/ScdHoSave');
const scdBranchRoute = require('./routes/api/ScdBranchSave');
const serviceQualityAssessmentChecklistRoute = require('./routes/api/ServiceQualityAssessmentChecklistSave')
const formMigrationRoute = require('./routes/api/DigitalMigrationSave')
const monthlyServiceMeetingRoute = require('./routes/api/MonthlyServiceMeetingFormSave')
const serviceQualityAnexRoute = require('./routes/api/ServiceQualityAnexSave')
// const ldapSaveRoute = require('./routes/api/LdapSave')
const MongoStore = require('connect-mongo')(session)
const app = express();
const passport = require('passport');
LdapStrategy = require('passport-ldapauth');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const soapCall = require('./routes/api/SoapCall');


// const User = require('./model').User;
// const LdapAuth = require('express-passport-ldap-mongoose');

// const Users = require('./models/model').Users


// Bodyparser MiddleWare
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    adapter: 'sails-mongo',
    host: 'cluster0-kqqjs.mongodb.net',
    port: 27017,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

let usernameAttr = 'uid'

var sessionMiddleWare = session({
  secret: 'top session secret',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true,
  unset: 'destroy',
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 3600 * 24,
    secure: false, // this need to be false if https is not used. Otherwise, cookie will not be sent.
  }
})


var OPTS = {
  server: {
    url: CONFIG.ldap.url,
    bindDN: CONFIG.ldap.dn,
    bindCredentials: 'Fmfb@2019',
    searchBase: CONFIG.ldap.base,
    searchFilter: '(sAMAccountName={{username}})',
  }
};


// The order of the following middleware is very important!!
app.use(bodyParser.json())
// app.use(sessionMiddleWare)
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());



// serve static pages (where login.html resides)
// app.use(express.static('public'))
// app.use(sessionMiddleWare)
// // use the library express-passport-ldap-mongoose
// let usernameAttributeName = 'uid'
// LdapAuth.init({
//   ldapOpts: {
//     url: CONFIG.ldap.url
//   },
//   // note in this example it only use the user to directly
//   // bind to the LDAP server. You can also use an admin
//   // here. See the document of ldap-authentication.
//   userDn: `uid={{username}},${CONFIG.ldap.base}`,
//   userSearchBase: CONFIG.ldap.base,
//   usernameAttribute: usernameAttributeName
// }, '', app, (id) => {
//   return Users.findOne({ usernameAttributeName: id }).exec()
// }, (user) => {
//   return Users.findOneAndUpdate({ username: user[usernameAttributeName] }, user, { upsert: true, new: true }).exec()
// })

// // serve static pages (where login.html resides)
// app.use(express.static('public'))

// Start server
// app.post('/login', passport.authenticate('ldapauth', { session: false }), function (req, res) {
//   { console.log(OPTS.server.searchFilter) }
//   res.send({ status: 'ok' });
// });

// app.use(function (req, res, formMigrationRoute) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   formMigrationRoute();
// });

// Use Routes



// a simple array to store user objects
// var User = []
// function findUserById(id) {
//   return new Promise((resolve, reject) => {
//     return resolve(User.find(u => { return u.uid === id }))
//   })
// }
// function upsertUser(user) {
//   return new Promise((resolve, reject) => {
//     var existingUser = User.find(u => {
//       return u.uid === user.uid
//     })
//     if (!existingUser) User.push(user)
//     return resolve(user)
//   })
// }

// LdapAuth.init(CONFIG.ldap.dn, CONFIG.ldap.url, app,
//   (id) => User.findOne({ uid: id }).exec(),
//   (user) => User.findOneAndUpdate({ uid: user.uid }, user, { upsert: true, new: true }).exec()
// )
// passport.use('ldap-login', new LdapStrategy(opts, function (user, done) {
//   console.log("Passport LDAP authentication.");
//   done(null, user);
// }



// LdapAuth.init(CONFIG.ldap.dn, CONFIG.ldap.url,
//   app, findUserById, upsertUser)

// auth.init('dc=example,dc=com', 'ldap://ldap.forumsys.com', app,
//   findUserById, upsertUser
// )

app.use('/add', scdHoRoute);
app.use('/add', scdBranchRoute);
app.use('/add', serviceQualityAssessmentChecklistRoute);
app.use('/add', serviceQualityAnexRoute)
app.use('/add', formMigrationRoute);
app.use('/add', monthlyServiceMeetingRoute);
// app.use('/api', ldapSaveRoute);
app.use('/api', soapCall);

// use JWT auth to secure the api
// app.use(jwt());

// api routes
app.use('/users', require('./webservices/users/users.controller'));
app.use('/roles', require('./webservices/roles/roles.controller'));
app.use('/locations', require('./webservices/locations/location.controller'));

// global error handler
app.use(errorHandler);
// app.use('ldap', ldapSaveRoute);

// app.use('/digitalForm', formMigrationRoute(router));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})
