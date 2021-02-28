const express = require('express')
const app = express()
const port = 3000

let highscores = [1,2,3]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/highscores', (req, res) => {
  res.send(highscores)
})

app.post('/highscores', (req, res) => {
  let newScore = Number(req.query.score)
  console.log("New score submitted:", newScore)

  if (typeof newScore == "number") {
    highscores.push(newScore)
  }

  res.send(highscores)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})