const router = require('express').Router()
const {createLane, deleteLane, getLanes, getLaneByRoute, getLaneById, getLaneByName, getLaneByRouteAndName} = require('../controllers/laneController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getLanes)
router.route('/create').post(protect, createLane)
router.route('/:id').delete(protect, deleteLane)
router.route('/:id').get(protect, getLaneById)
router.route('/get-lane-by-route/:id').get(protect, getLaneByRoute)
router.route('/get-lane-by-name/:lane').get(protect, getLaneByName)
router.route('/get-customer-lane/:routeId/:lane').get(protect, getLaneByRouteAndName)

module.exports = router