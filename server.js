const express = require('express')
const app = express()
const port = 8888
var path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})


app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
})

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
})

app.listen(port, () => {
  console.log(`Timepass app listening on port ${port}`)
})