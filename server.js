require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const mongoose = require ('mongoose')
const connectDB = require('./config/dbConnect')


connectDB();

app.use(cors())

app.use(express.json());

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})

const productsRouter = require('./routes/products')

app.use('/products', productsRouter)
