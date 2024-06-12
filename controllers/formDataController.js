const nodemailer = require('nodemailer');

const submitFormData = async (req, res) => {
    try {
        const {  name, email, phone, employer, city, source, fresher } = req.body;
        const cv = req.files.cv; 
        const cover_letter = req.files.cover_letter; 

        const employeeStatus = fresher ? 'Fresher' : employer;

        const mailOptions = {
            from: email,
            to: "info@sixdindia.com",
            subject: 'New Form Submission',
            html: `
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Employer:</strong> ${employeeStatus}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Source:</strong> ${source}</p>
               
            `,
            attachments: [
                {
                    filename: cv.name,
                    content: cv.data,
                    contentType: cv.mimetype
                },
                {
                    filename: cover_letter.name,
                    content: cover_letter.data,
                    contentType: cover_letter.mimetype
                }
            ]
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'info@sixdindia.com',
                pass: 'fqqd oyuy pwzm cjga'
            }
        });

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { submitFormData };

