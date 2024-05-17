

const express = require('express');
const router = express.Router();
const formDataController = require('../controllers/formDataController');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/submit', upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'cl', maxCount: 1 }]), formDataController.submitFormData);

module.exports = router;
