const express = require('express')
const pokemon = require('./models/pokemon')
const PORT = 3000
const app = express()

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));


//Induces
//Index
app.get('/', async (req,res) => {
  res.send('Welcome to the Pokemon App!')
})

//Induces
//Index
app.get('/pokemon', async (req, res) => {
  res.render('Index', {pokemon: pokemon})
})

//New

app.get('/pokemon/new', async (req, res) => {
  res.render('New')
})

//Create
app.post('/pokemon', async (req, res) => {
  pokemon.push(req.body)
  console.log(req.body)
  res.redirect('/pokemon')
})
//Show
app.get('/pokemon/:id', async (req,res) => {
  res.render('Show', {thePokemon: pokemon[req.params.id]})
})



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});