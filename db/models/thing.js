'use strict'

const { STRING, DATE } = require('sequelize')

module.exports = db => db.define('things', {
    name: STRING,
    category: STRING,
    when: DATE,
    where: STRING,
    price: STRING
})

module.exports.associations = (Thing, { User, Favorite }) => {
    Thing.belongsToMany(User, { as: 'lovers', through: Favorite })
}