
//routes for feedback form


const express = require ('express');
const router = express.Router();

const {createFeedback, getAllFeedback, deleteFeedback} = require ('../controllers/feedbackController');

router.post('/feedback', createFeedback);
router.get('/feedback', getAllFeedback);
router.delete('/feedback/:id', deleteFeedback);

module.exports = router;