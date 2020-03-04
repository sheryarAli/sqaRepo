let mongoose = require('mongoose')

///////////////////
let userSchema = mongoose.Schema(
    {
        // these fields are from ldap
        username: { type: String, lowercase: true },
        cn: { type: String },
        sn: { type: String },
        dn: { type: String },
        mail: { type: String, lowercase: true }
    },
    {
        timestamps: true
    }
)
let Users = mongoose.model('Users', userSchema)

module.exports.Users = Users