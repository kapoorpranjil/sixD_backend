

const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');


router.post('/', contactFormController.submitContactForm);

module.exports = router;
