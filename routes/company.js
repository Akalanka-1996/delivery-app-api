const router = require('express').Router()
const {createCompany, getCompanyByArea} = require('../controllers/companyController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createCompany)
router.route('/:area').get(protect, getCompanyByArea)

module.exports = router