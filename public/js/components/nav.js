const React = require('react');
const Search = require('./search.js');

const Nav = React.createClass({

  handleTheater : function() {
    const $container = $('#container')
    $container.append($('<div>').text('yoyoyo'))
  },

  handleMovies : function() {
    console.log('movies yo')
  },

  render : function() {
    return (
      <nav id="navbar">
        <ul>
          <li><a refs="theaterLink" onClick={this.handleTheater}>Theaters</a></li>
          <li><a refs="moviesLink" onClick={this.handleMovies}>Movies</a></li>
          <Search/>
        </ul>
      </nav>
    )
  }
})

module.exports = Nav;
