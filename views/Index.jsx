const React = require('react')




class Index extends React.Component {
  render() {
    return (
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>See all the pokemon</h1>
        <ul>
          {this.props.pokemon.map((p) => {
              return (<li>{p.name}</li>)
          })}
        </ul>
      </body>
      </html>
    )
  }
}

module.exports = Index
