

// main server file

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const connectDB = require('./config/databaseConnection');

const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
require('dotenv').config();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/feedback', feedbackRoutes);


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));