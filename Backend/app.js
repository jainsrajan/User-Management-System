require ('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')


const connect_to_database = require('./Database-connection/db.js')
connect_to_database()
// cookieParser()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


const router = require('./Router/routes.js')

app.use("/" , router)


module.exports = app