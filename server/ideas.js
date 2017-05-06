'use strict'

const db = require('APP/db')
const Thing = db.model('things')

module.exports = require('express').Router()
    .get('/', (req, res, next) => {
        Thing.findAll()
            .then(ideas => res.send(ideas.data))
            .catch(err => console.error(err))
    })