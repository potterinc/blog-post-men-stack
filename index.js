require('dotenv').config();
const express = require('express');
const app = express('./server/api/Router');
const PORT = process.env.PORT || 3000;

// Configure a view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(`${__dirname}/public`));

// Route parameters
const articleRoutes = require('./routes/Router')
app.use('/api/articles', articleRoutes);

app.listen(PORT, (error)=> console.log(`Server running on port ${PORT}`));
