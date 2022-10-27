const router = require('express').Router()
const {createCompany, getCompanyByArea, getCompanyByCategory, getCompanyFromUser, getUserCompanies} = require('../controllers/companyController')

const {protect} = require('../middleware/authMiddleware')
const {isAdmin} = require('../utils/permission')

router.route('/create').post(protect, isAdmin, createCompany)
router.route('/get-my-company').get(protect, isAdmin, getUserCompanies)
router.route('/company-area/:area').get(protect, getCompanyByArea)
router.route('/company-category/:category').get(protect, getCompanyByCategory)
router.route('/company-from-user/:area/:category').get(protect, getCompanyFromUser)

module.exports = router