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

class Index extends React.Component {
  render() {
      let i = -1
    return (
      <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>See all the pokemon</h1>
        <ul>
          {this.props.pokemon.map((p) => {
              i++
              return (<li><a href={`/pokemon/${i}`}>{makeProperTitle(p.name)}</a></li>)
          })}
        </ul>
      </body>
      </html>
    )
  }
}

module.exports = Index
