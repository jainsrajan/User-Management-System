const express = require('express')
const router = express.Router()

const {signup , home} = require('../Controllers/controllers.js')

router.get('/' , home)
router.post('/signup' , signup)

module.exports = router
