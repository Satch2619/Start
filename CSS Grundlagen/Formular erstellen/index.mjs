import express from 'express';
import path from 'path';

const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(path.resolve("seiten/index.html"))
})

app.post('/geheime-seite.html', function (req, res) {
  res.sendFile(path.resolve("seiten/geheime-seite.html"))
})

app.listen(port,() => {
  console.log(`Sascha ist der Beste ${port}`)
})