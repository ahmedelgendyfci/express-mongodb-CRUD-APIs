const mongoose = require('mongoose')
const url = "mongodb://heroku_5313h20l:sedrt9516kh9bbql2jbhtfqe0f@ds217678.mlab.com:17678/heroku_5313h20l" || "mongodb://localhost:27017/heroku_5313h20l"

mongoose.connect(url)