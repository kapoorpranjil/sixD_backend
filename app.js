require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const formDataRoutes = require('./routes/formDataRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const { authenticateJWT } = require('./middleware/authMiddleware');

const app = express();
const PORT = 7000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', formDataRoutes);
app.use('/contact', contactFormRoutes);
app.use('/auth', authRoutes);
app.use('/api/jobs',  jobRoutes); 

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} server is running`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();
