// contactFormController.js

const nodemailer = require('nodemailer');


const submitContactForm = async (req, res) => {
    try {
        const { name, email, message,interest , phone } = req.body;


        const mailOptions = {
            from: email,
            to: 'info@sixdindia.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n Phone:${phone}\n Area of Interest: ${interest}`
        };


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info@sixdindia.com',
                pass: 'fqqd oyuy pwzm cjga'
            }
        });

       
        await transporter.sendMail(mailOptions);

      
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { submitContactForm };
