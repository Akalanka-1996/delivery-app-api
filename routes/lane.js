const router = require('express').Router()
const {createLane} = require('../controllers/laneController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createLane)

module.exports = router