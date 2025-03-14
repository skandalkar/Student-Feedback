
const Feedback = require ('../models/feedback');

//submit feedback

exports.createFeedback = async (req, res) =>{
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({message: "Feedback submitted successfully!", feedback});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};


//get all feedbacks

exports.getAllFeedback = async (req, res) => {

    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
};

 
//delete feedback 

exports.deleteFeedback = async (req, res) => { 
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Feedback deleted successfully!"});
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
};