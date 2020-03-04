const config = require('../../config.json');
const db = require('../../_helpers/db');
const Roles = db.Roles;

module.exports = {
    getAll,
};
async function getAll() {
    return await Roles.find().select('-hash');
}
