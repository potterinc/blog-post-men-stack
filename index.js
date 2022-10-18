require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Database connection
const db = require('./server/db/conn');

// Configure a view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(`${__dirname}/public`));
app.use(express.json())

// Route parameters
const articleRoutes = require('./server/routes/router')
app.use('/api/articles', articleRoutes);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
