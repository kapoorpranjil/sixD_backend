const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/sixD', {
        await mongoose.connect('mongodb+srv://social:uk3HpILAAgmt3r7r@cluster0.fkrdklh.mongodb.net/sixD', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
       
    
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); 
    }
};

module.exports = connectDB;
