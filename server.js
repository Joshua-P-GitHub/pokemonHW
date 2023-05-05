const express = require('express')
const pokemon = require('./models/pokemon')
const PORT = 3000
const app = express()


//Induces
//Index
app.get('/', async (req,res) => {
  res.send('Welcome to the Pokemon App!')
})

//Induces
//Index
app.get('/pokemon', async (req, res) => {
  res.send(pokemon)
})



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});