const express = require('express');
const { createJobType, allJobsType } = require('../controllers/jobTypeController');
const { isAuthenticated } = require('../middleware/auth.js');
const router = express.Router();


//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType);
// /api/type/jobs
router.get('/type/jobs', allJobsType);


module.exports = router;