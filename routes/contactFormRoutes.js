// contactFormRoutes.js

const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

// POST /submit route handler for submitting contact form
router.post('/', contactFormController.submitContactForm);

module.exports = router;
