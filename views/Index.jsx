const React = require('react')

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
        <h1 style={{backgroundColor: 'red', textAlign: 'center'}}>See all the pokemon</h1>
        <ul>
          {this.props.pokemon.map((p) => {
              i++
              return (<li style={{listStyle: 'none', marginBottom: 15, backgroundColor: 'red', padding: 15, textAlign: 'center'}}><a style={{color: 'white'}} href={`/pokemon/${p._id}`}>{makeProperTitle(p.name)}</a></li>)
          })}
        </ul>
        <a href="/pokemon/new" style={{backgroundColor: 'green', padding: 20, width: '100%', textAlign: 'center'}}>Create A Pokemon</a>
      </body>
      </html>
    )
  }
}

module.exports = Index
