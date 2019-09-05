const mongoose = require('mongoose')
const url = process.env.MONGODB_URI || "mongodb://localhost:27017"

mongoose.connect(url+"/heroku_5313h20l")