const db = require('../data/db-config')

function getByEmail(email) {
    return db('users').where({ email }).first()
}

function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

function Add(data) {
    return db('users').insert(data, ['*'])
}
function update(email, data) {
    return db('users').where({ email }).update(data, ['*'])
}

module.exports = {
    Add,
    findBy,
    getAll,
    getByEmail,
    update
}
