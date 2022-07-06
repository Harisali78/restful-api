require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URL;
const router = require('./routes/routes');
const cors = require('cors');
const port = process.env.PORT;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', router)
app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`)
})