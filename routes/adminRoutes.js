const express = require('express')
const { 
    getAllUsersController, 
    getAllDoctorsController,
    changeAccountStatusController, 
} = require('../controllers/adminCtrl');
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router()

// USERS || GET
router.get('/getAllUsers', authMiddleware, getAllUsersController )

// DOCTORS || GET
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//POST ACCOUNT STATUS
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController)

module.exports = router