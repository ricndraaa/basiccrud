const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./src/router/users.router')

const app = express()

const router = express.Router()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.set('views', './src/views')
app.set('view engine','ejs')

app.use(userRouter);

app.listen(3000, () => {
    console.log("service running on port 3000")
})
