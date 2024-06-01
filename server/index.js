// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("./db/config");
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/todo', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});