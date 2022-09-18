import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send('Sascha lernt Web Development')
})

app.listen(3000)