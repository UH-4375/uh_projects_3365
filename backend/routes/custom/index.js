const express = require('express')

const router = express.Router({ caseSensitive: true })

const home = require('./home')
const account = require('./account')
const departments = require('./departments')
const roles = require('./roles')
const status = require('./status')
const users = require('./users')

router.use('/api/home', home)
router.use('/api/account', account)
router.use('/api/departments', departments)
router.use('/api/roles', roles)
router.use('/api/status', status)
router.use('/api/users', users)

module.exports = router