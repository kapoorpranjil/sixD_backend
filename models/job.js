const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    tabTitle: { type: String, required: true },
    id: { type: Object },
    location: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    post: { type: Date, required: true },
    description: { type: String, required: true },
    experience: { type: String, required: true },
    qualifications: { type: [String], required: true },
    responsibilities: { type: [String], required: true },
    softskills: { type: [String], required: true },
    tech: { type: [String], required: true }
});

module.exports = mongoose.model('Job', jobSchema);
