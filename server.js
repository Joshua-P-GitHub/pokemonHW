const express = require('express')
const PORT = 3000
const app = express()

app.get('/', async (req,res) => {
  res.send('Welcome to the Pokemon App!')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});