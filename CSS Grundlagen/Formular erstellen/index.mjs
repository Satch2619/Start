import express from 'express';
import path from 'path';

const app = express()
const port = 3000

app.use(express.urlencoded())

app.get('/', function (req, res) {
  res.sendFile(path.resolve("seiten/index.html"))
})

app.post('/geheime-seite.html', (req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;
    if (username === 'Satch' && userpassword === 'Production') {
  return res.sendFile(path.resolve("seiten/geheime-seite.html"))
    }
  res.sendFile(path.resolve("seiten/geheime-seite.html"))
})

app.listen(port,() => {
  console.log(`Sascha ist der Beste ${port}`)
})