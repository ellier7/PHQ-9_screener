const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/public/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'))
})

app.get('/styles/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/styles/style.css'))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(port, function () {
  console.log('Listening on port ' + port)
})
