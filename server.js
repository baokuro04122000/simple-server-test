const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json('hello world')
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`server running ${process.env.PORT}`)
})