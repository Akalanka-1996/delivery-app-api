const router = require('express').Router();
const {authUser, registerUser } = require('../controllers/userController');

router.route('/').post(registerUser)
router.route('/login').post(authUser)


module.exports = router;