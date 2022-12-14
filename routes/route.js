const router = require('express').Router()
const { createRoute, getCompanyRoute, getRouteWithPopulate, startJourney, followRoute, getFollowersCount, getRouteById, getFollowers, endJourney } = require('../controllers/routeController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRoute)
router.route('/:company').get(protect, getCompanyRoute)
router.route('/get-route-with-lanes/:company').get(protect, getRouteWithPopulate)
router.route('/start-journey/:id').put(protect, startJourney)
router.route('/end-journey/:id').put(protect, endJourney)
router.route('/follow-route/:id').put(protect, followRoute)
router.route('/follower-count/:id').get(protect, getFollowersCount)
router.route('/get-followers/:id').get(protect, getFollowers)
router.route('/get-route-by-id/:id').get(protect, getRouteById)
// router.route('/:id')

module.exports = router