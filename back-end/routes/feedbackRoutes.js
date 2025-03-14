
//routes for feedback form


const express = require ('express');
const router = express.Router();

const {createFeedback, getAllFeedback, deleteFeedback} = require ('../controllers/feedbackController');

router.post('/', createFeedback);
router.get('/', getAllFeedback);
router.delete('/:id', deleteFeedback);

module.exports = router;