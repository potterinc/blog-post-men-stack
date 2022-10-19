const mongoose = require('mongoose')
mongoose.connect(process.env.SERVER_URI, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (e) => console.log(e))
    .on('disconnected', () => console.log('Database disconnected'))
    .once('connected', () => console.log(`Connected to ${process.env.SERVER_URI}`))
