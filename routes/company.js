const router = require('express').Router()
const {createCompany, getCompanyByArea, getCompanyByCategory, getCompanyFromUser} = require('../controllers/companyController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createCompany)
router.route('/company-area/:area').get(protect, getCompanyByArea)
router.route('/company-category/:category').get(protect, getCompanyByCategory)
router.route('/company-from-user/:area/:category').get(protect, getCompanyFromUser)

module.exports = router