const router = require('express').Router()
const { createRoute, getCompanyRoute } = require('../controllers/routeController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRoute)
router.route('/:company').get(protect, getCompanyRoute)

module.exports = router