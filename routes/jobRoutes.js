const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { authenticateJWT } = require('.././middleware/authMiddleware');

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.post('/',authenticateJWT, jobController.createJob);
router.put('/:id',authenticateJWT, jobController.updateJob);
router.delete('/:id',authenticateJWT, jobController.deleteJob);
router.get('/search/:id',authenticateJWT, jobController.getJobById);

module.exports = router;
