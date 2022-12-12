const express = require('express')
const router = express.Router()

router.use('/ads', require('./adsRoutes'))

module.exports = router