const mongoose = require('mongoose')
mongoose.connect(process.env.SERVER_URI)
const db = mongoose.connection

db.on('error', (e) => console.log(e))
    .once('connected', () => console.log('Connected to database'))
