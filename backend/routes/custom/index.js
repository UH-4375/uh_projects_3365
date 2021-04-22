const express = require('express')

const router = express.Router({ caseSensitive: true })

const home = require('./home')
const account = require('./account')
const departments = require('./departments')
const roles = require('./roles')
const statuses = require('./statuses')
const users = require('./users')
const issueType = require('./issueType')
const shippingMethods = require('./shippingMethods')
const softwareStatus = require('./softwareStatus')
const teams = require('./teams')
const issueCategory = require('./issueCategory')
const requestStatus = require('./requestStatus')
const assetType = require('./assetType')
const locationType = require('./locationType')
const assetStatus = require('./assetStatus')
const faqCategory = require('./faqCategory')
const slaList = require('./slaList')
const installStatus = require('./installStatus')
const shippingStatus = require('./shippingStatus')
const paymentTerms = require('./paymentTerms')
const resolvedList = require('./resolvedList')
const changeRequestType = require('./changeRequestType')
const changeRequestStatus = require('./changeRequestStatus')
const incidentStatus = require('./incidentStatus')
const priorityList = require('./priorityList')
const tickets = require('./tickets')
const lumberjack = require('./lumberjack')
const locations = require('./locations')
const vendors = require('./vendors')
const assetList = require('./assetList')
const softwareAssets = require('./softwareAssets')
const faqList = require('./faqList')
const contracts = require('./contracts')
const licenseKeys = require('./licenseKeys')
const ticketWorkLog = require('./worklog')
const incidentType = require('./incidentType')
const incidentUrgency = require('./incidentUrgency')
const incidents = require('./incidents')
const incidentWorkLog = require('./incidentworklog')

router.use('/api/home', home)
router.use('/api/account', account)
router.use('/api/departments', departments)
router.use('/api/roles', roles)
router.use('/api/status', statuses)
router.use('/api/users', users)
router.use('/api/issueType', issueType)
router.use('/api/shippingMethods', shippingMethods)
router.use('/api/softwareStatus', softwareStatus)
router.use('/api/teams', teams)
router.use('/api/issueCategory', issueCategory)
router.use('/api/requestStatus', requestStatus)
router.use('/api/assetType', assetType)
router.use('/api/locationType', locationType)
router.use('/api/assetStatus', assetStatus)
router.use('/api/faqCategory', faqCategory)
router.use('/api/slaList', slaList)
router.use('/api/installStatus', installStatus)
router.use('/api/shippingStatus', shippingStatus)
router.use('/api/paymentTerms', paymentTerms)
router.use('/api/resolvedList', resolvedList)
router.use('/api/changeRequestType', changeRequestType)
router.use('/api/changeRequestStatus', changeRequestStatus)
router.use('/api/incidentStatus', incidentStatus)
router.use('/api/priorityList', priorityList)
router.use('/api/tickets', tickets)
router.use('/api/lumberjack', lumberjack)
router.use('/api/locations', locations)
router.use('/api/vendors', vendors)
router.use('/api/assetList', assetList)
router.use('/api/softwareAssets', softwareAssets)
router.use('/api/faqList', faqList)
router.use('/api/contracts', contracts)
router.use('/api/licenseKeys', licenseKeys)
router.use('/api/worklog', ticketWorkLog)
router.use('/api/incidentType', incidentType)
router.use('/api/incidentUrgency', incidentUrgency)
router.use('/api/incidents', incidents)
router.use('/api/incidentworklog', incidentWorkLog)

module.exports = router
