const router = require('express').Router()
const { startJourney } = require('../controllers/journeyController')

const {protect} = require('../middleware/authMiddleware')

router.route('/start/:route').post(protect, startJourney)

module.exports = router