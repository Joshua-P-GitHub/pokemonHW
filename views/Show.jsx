const React = require('react')
const pokemon = require('../models/pokemon')

function makeProperTitle(title) {
  let arr = []
  let arr2 = []
  let finalString = ''
  let finalString2 = ''
  if (title.split(' ').length > 1) {
    let wordArr = title.split(' ')
    for (let word of wordArr) {
      arr = []
      finalString = ''
      for (let character of word) {
        arr.push(character)
      }
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          arr[i] = arr[i].toUpperCase()
        }
        finalString += arr[i]
      }
      arr2.push(finalString)
    }
    for (let i = 0; i < arr2.length; i++) {
      finalString2 += `${arr2[i]} `
    }
    finalString2.trimEnd()
    return finalString2
  } else {
    for (let character of title) {
      arr.push(character)
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[i] = arr[i].toUpperCase()
      }
      finalString += arr[i]
    }
    return finalString
  }
}

let i = -1
class Show extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>Pokemon</title>
      </head>
      <body>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{this.props.thePokemon.name}</h2>
        <img src={`http://img.pokemondb.net/artwork/${this.props.thePokemon.name}.jpg`}/>
        <a href='/pokemon'>BACK</a>
      </body>
      </html>
    )
  }
}

module.exports = Show
