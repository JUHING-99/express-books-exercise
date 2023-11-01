const books = require('./data/books.json');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/all', (req, res) => {
    res.json(books)
  })

  app.get('/first', (req, res) => {
    res.json(books[0])
  })



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});