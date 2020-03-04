const config = require('../../config.json');
const db = require('../../_helpers/db');
const Locations = db.Locations;

module.exports = {
    getAll,
};
async function getAll() {
    return await Locations.find().select('-hash');
}
