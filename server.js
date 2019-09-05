const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const router = require('./controllers/userController')

const port = process.env.PORT ||3000
const app = express();

app.use(express.static('public'))


app.engine('handlebars', exphbs())
app.set("view engine", 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(router)


app.listen(port)