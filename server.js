require('dotenv').config()
const express = require('express')
const Pokemon = require('./models/pokemon')
const PORT = 3000
const app = express()




//database connection
const { connect, connection} = require('mongoose')

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connection.once('open' , () => {
  console.log('connected to mongo');
})


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
res.send('Welcome to the pokemon App')
})

//Induces
//Index
app.get('/pokemon', async (req, res) => {
  try {
  const thePokemon = await Pokemon.find({})
  res.status(200).render('Index', {pokemon: thePokemon})    
  } catch (error) {
    res.status(400).send(error)
  }

})

//New

app.get('/pokemon/new', async (req, res) => {
  res.render('New')
})

//Create
app.post('/pokemon', async (req, res) => {
 try {
  const newPokemon = await Pokemon.create(req.body)
  await res.redirect('/pokemon')
 } catch (error) {
  res.status(400).send(error)
 }
})
//Show
app.get('/pokemon/:id', async (req,res) => {
  const thePokemon = await Pokemon.findById(req.params.id)
  res.render('Show', {thePokemon: thePokemon})
})



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});