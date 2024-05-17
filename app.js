const express = require('express');
const cors = require('cors');
const app = express();
const formDataRoutes = require('./routes/formDataRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');

const PORT = 7000;

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Define routes
app.use('/', formDataRoutes);
app.use('/contact', contactFormRoutes);

// Default route
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
