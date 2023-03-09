const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 3000

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('connected to Monogo Db'))
.catch((err) => console.log(err) )

app.use(routes)

app.listen(PORT, () => console.log('listening on: ${PORT}'))