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

  app.get('/last', (req, res) => {
    res.json(books[books.length - 1])
  })

  
  app.get('/middle', (req, res) => {
    res.json(books[books.length/2])
  })

  app.get('/author/dante-alighieri', (req, res) => {
    res.json(books.filter(book => book.author==="Dante Alighieri")[0].title)
  })

  app.get('/country/charles-dickens', (req, res) => {
    res.json(books.filter(book => book.author==="Charles Dickens")[0].country)
  })

  app.get('/year&pages/cervantes', (req, res) => {
    res.json(books.filter(book => book.author==="Miguel de Cervantes").map(book => {return {"pages": book.pages, "year": book.year}})[0])
  })
 
  app.get('/country/count/spain', (req, res) => {
    res.json(books.filter(book => book.country==="Spain").length)
  })

  app.get('/country/at-least/germany', (req, res) => {
    res.json(books.filter(book => book.country==="Germany").length>0)
  })


  app.get('/pages/all-greater/200', (req, res) => {
    res.json(books.every(book => book.pages>200))
  })

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});