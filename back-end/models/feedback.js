
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
    {
        studentName: String,
        rollNumber: Number,

        subjects: {
            subject1: Number,
            subject2: Number,
            subject3: Number,
            subject4: Number,
            subject5: Number
        },

        practicals: {
            practical1: Number,
            practical2: Number,
            practical3: Number
        },

        feedbackComments: String
    });

module.exports = mongoose.model('feedback', feedbackSchema);