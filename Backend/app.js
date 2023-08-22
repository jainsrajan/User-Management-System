require ('dotenv').config()
const express = require('express')
const app = express()

const connect_to_database = require('./Database-connection/db.js')
connect_to_database()

app.use(express.json())

const router = require('./Router/routes.js')
app.use('/' , router)


module.exports = app