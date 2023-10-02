const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
// const bodyParser = require('body-parser')

const app = express()

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

//https://nodejs.org/api/events.html#emitteroneventnsme-listener
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection-error:'))
db.once('open', () => {
    console.log("Connected to MongoDB")
})

//Define a schema and model for form data
const contactSchema = new mongoose.Schema({
    name: String,
    people: Number,
    date: Date,
    message: String
})

const Contact = mongoose.model("Contact", contactSchema)

//Handle form submission request
app.post('/submit', async (req, res) => {
    const formData = {
        name: req.body.Name,
        people: req.body.People,
        date: new Date(req.body.date),
        message: req.body.Message
    }
    try {
        const newContact = newContact(formData)
        await newContact.save()
        res.redirect('/?success')
    } catch (error) {
        res.redirect('/?error')
    }
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//Start server
const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server connected to ${PORT}`)
})