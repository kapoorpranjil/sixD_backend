const Job = require('../models/job');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createJob = async (req, res) => {
    const job = new Job({
        tabTitle: req.body.tabTitle,
        location: req.body.location,
        title: req.body.title,
        content: req.body.content,
        post: req.body.post,
        description: req.body.description,
        experience: req.body.experience,
        qualifications: req.body.qualifications,
        responsibilities: req.body.responsibilities,
        softskills: req.body.softskills,
        tech: req.body.tech
    });

    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        Object.assign(job, req.body);
        const updatedJob = await job.save();
        res.json(updatedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const result = await Job.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
