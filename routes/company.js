const router = require('express').Router()
const {createCompany} = require('../controllers/companyController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createCompany)

module.exports = router