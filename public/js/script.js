'use strict'

const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('./components/nav.js');
const Search = require('./components/search.js');

const App = React.createClass({
  render : function() {
    return (

      <div>
        <Nav/>
        <h3> Why The Fuck Are You Reading Over My Shoulder </h3>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#container'))
