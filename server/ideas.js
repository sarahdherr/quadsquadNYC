'use strict'

const db = require('APP/db')
const Thing = db.model('things')

module.exports = require('express').Router()
    .get('/', (req, res, next) => {
        Thing.findAll()
            .then(ideas => {
                console.log('these are from the db', ideas.data)
                return ideas
            })
            .then(ideas => res.send(ideas.data))
            .catch(err => console.error(err))
    })