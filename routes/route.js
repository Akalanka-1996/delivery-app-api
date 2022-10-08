const router = require('express').Router()
const { createRoute } = require('../controllers/routeController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRoute)

module.exports = router