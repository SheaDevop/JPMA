const express = require('express');
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require('../controllers/userController.js');
const { isAuthenticated, isAdmin } = require('../middleware/auth.js');
const router = express.Router();


//user routes

// /api/allUsers
router.get('/allUsers', isAuthenticated, isAdmin, allUsers);
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser);
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser);
// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);
// /api/user/jobshistory
router.post('/user/jobshistory', isAuthenticated, createUserJobsHistory);


module.exports = router;  