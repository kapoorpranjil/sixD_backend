

const nodemailer = require('nodemailer');


const submitFormData = async (req, res) => {
    try {
        
        const { fullName, email, phone, employeeStatus, source, employeeType } = req.body;
        const cv = req.files.cv; 
        const cl = req.files.cl;

      
        const mailOptions = {
            from: 'kapoorpranjil7@gmail.com',
            to: email,
            subject: 'New Form Submission',
            html: `
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Employee Status:</strong> ${employeeStatus}</p>
                <p><strong>Source:</strong> ${source}</p>
                <p><strong>Employee Type:</strong> ${employeeType}</p>
            `,
            attachments: [
                {  
                    filename: cv.name,
                    content: cv.data,
                    contentType: 'application/pdf'
                },
                {   
                    filename: cl.name,
                    content: cl.data,
                    contentType: 'application/pdf'
                }
            ]
        };
        
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port:"465",
            secure: true,
            auth: {
                user: 'kapoorpranjil7@gmail.com',
                pass: 'daeh ffkt buiw nfpy'
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
