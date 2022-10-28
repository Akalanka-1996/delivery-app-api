const router = require('express').Router()
const { createRoute, getCompanyRoute, getRouteWithPopulate, startJourney } = require('../controllers/routeController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRoute)
router.route('/:company').get(protect, getCompanyRoute)
router.route('/get-route-with-lanes/:company').get(protect, getRouteWithPopulate)
router.route('/start-journey/:id').put(protect, startJourney)
// router.route('/:id')

module.exports = router