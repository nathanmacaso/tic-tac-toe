import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Board from './Board';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: ''
    }
  }

  componentWillMount() {
    if(!this.state.player1.length) {
      var p1 = window.prompt('Enter Player 1');
      var p2 = window.prompt('Enter Player 2');
      this.setPlayers(p1, p2);
    }
  }
  setPlayers= (p1, p2) => {
    this.setState({
      player1: p1,
      player2: p2
    });
  }

  render() {
    const { player1, player2 } = this.state;
    return (
      <div className="App container">
        <Scoreboard player1={player1} player2={player2} />
        <Board player1={player1} player2={player2}/>
      </div>
    );
  }
}
