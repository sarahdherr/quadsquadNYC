'use strict'

const db = require('APP/db')
const Thing = db.model('things')

module.exports = require('express').Router()
    .get('/', (req, res, next) => {
        return Thing.findAll()
            .then(ideas => {
                console.log('these are from the db', ideas)
                res.send(ideas)
            })
            // .then(ideas => res.send(ideas.data))
            .catch(next)
    })

.post('/', (req, res, next) => {
    return Thing.create(req.body)
        .then(idea => res.sendStatus(204))
        .catch(next)
})