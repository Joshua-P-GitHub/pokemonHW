const React = require('react')

class New extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Create A pokemon</h1>
          <form action="/pokemon" method='POST'>
            <input type="text" name='name'/>
            <input type="submit" value="" />
          </form>
      </body>
      </html>
    )
  }
}

module.exports = New