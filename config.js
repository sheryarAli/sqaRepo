module.exports = {
    dburl: 'mongodb+srv://shahzore:12345@cluster0-1kwdo.mongodb.net/test?retryWrites=true&w=majority',

    sessionSecret: 'Fmfb@2019',
    ldap: {
        dn: 'CN=Person,CN=Schema,CN=Configuration,DC=um,DC=com',
        url: 'ldap://172.17.60.245:3268',
        base: 'DC=UM,DC=COM'
    }
}