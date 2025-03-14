

// main server file

//Server starting Aknowledgement
let date = new Date();
console.log(date.toTimeString());
console.log("\nRunning...\n");

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
app.use('/feedback', feedbackRoutes);


app.listen(process.env.portNo, () => console.log(`Server running on port ${process.env.portNo}`));