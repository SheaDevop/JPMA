const express = require('express');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobController.js');
const { isAuthenticated, isAdmin } = require('../middleware/auth.js');
const router = express.Router();


//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);
// /api/job/update/job_id
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
// /api/job/show
router.get('/job/show', showJobs);



module.exports = router;