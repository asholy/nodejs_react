const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://asholy:qazwsx21@boilerplate.viouz.mongodb.net/test?retryWrites=true&w=majority').then(() => console.log('MogoDB Connect Success!!!!'))
  .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!!!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

