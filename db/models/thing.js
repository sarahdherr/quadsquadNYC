'use strict'

const { STRING, DATE } = require('sequelize')

module.exports = db => db.define('things', {
    name: STRING,
    category: STRING,
    start: DATE,
    end: DATE,
    where: STRING,
    price: STRING
})

module.exports.associations = (Thing, { User, Favorite }) => {
    // Thing.belongsToMany(User, { as: 'lovers', through: Favorite })
}