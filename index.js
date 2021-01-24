const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(res)
  res.send('Hello World!')
})
app.get('/', (req, res) => {
    console.log(res)
  res.send('AboutUS')
})

app.get('/error', (req, res) => {
    console.log(res)
  res.send('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
