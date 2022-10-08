const router = require('express').Router()
const {createLane, deleteLane, getLanes} = require('../controllers/laneController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getLanes)
router.route('/create').post(protect, createLane)
router.route('/:id').delete(protect, deleteLane)

module.exports = router