import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      'robots': [],
      'searchfield': '',
    }

    // This binding is necessary to make `this` work in the callback
    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({'robots' : users}) })
  }

  onSearchChange = (event) => {
    this.setState({ 'searchfield': event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1 className="f1 tc">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className='f1'>Robo Friends</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <CardList robots={ filteredRobots }/>
        </div>
      );
    }
  }

}

export default App;
