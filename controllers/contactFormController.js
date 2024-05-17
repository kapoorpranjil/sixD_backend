// contactFormController.js

const nodemailer = require('nodemailer');

// POST /submit route handler for submitting contact form
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message,areaOfInterest , phone } = req.body;

        // Construct email message
        const mailOptions = {
            from: email,
            to: 's.mohammadshafiqhussain@gmail.com', // Enter your email address here
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n Phone:${phone}\n Area of Interest: ${areaOfInterest}`
        };

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kapoorpranjil7@gmail.com',
                pass: 'daeh ffkt buiw nfpy'
            }
        });

        // Send email
        await transporter.sendMail(mailOptions);

        // Respond to the client
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { submitContactForm };
