require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, (error)=> console.log(`Server running on port ${PORT}`));
