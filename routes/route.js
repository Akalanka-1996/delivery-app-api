const router = require('express').Router()
const { createRoute, getCompanyRoute, getRouteWithPopulate } = require('../controllers/routeController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRoute)
router.route('/:company').get(protect, getCompanyRoute)
router.route('/get-route-with-lanes/:company').get(protect, getRouteWithPopulate)

module.exports = router