import React, { Component }  from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: props.player1,
      player2: props.player2,
      player1Vals: [],
      player2Vals: [],
      isPlayer1Turn: true,
      current: '',
      clicks: 0
    };
  }

  handleClick = (e) => {
    if(this.state.isPlayer1Turn) {
      var p1Arr = this.state.player1Vals.concat(e.target.value);
      this.setState({
        player1Vals: p1Arr,
        isPlayer1Turn: false,
        current: [e.target.value],
        clicks: this.state.clicks + 1
      });
    } else {
      var p2Arr = this.state.player2Vals.concat(e.target.value);
      this.setState({
        player2Vals: p2Arr,
        isPlayer1Turn: true,
        current: [e.target.value],
        clicks: this.state.clicks + 1
      });
    }
  }

  checkWinner() {
    const {player1, player2, player1Vals, player2Vals} = this.state;
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]
    ];

    winningCombos.forEach((combo) => {
      const compareArray = [];
      player1Vals.forEach((num) => {
        const n = parseInt(num);
        if(combo.includes(n)) {
          compareArray.push(n)
        }
      })

      if(JSON.stringify(combo) === JSON.stringify(compareArray.sort())) {
        this.triggerWinner(player1);
      }
    });

    winningCombos.forEach((combo) => {
      const compareArray = [];
      player2Vals.forEach((num) => {
        const n = parseInt(num);
        if(combo.includes(n)) {
          compareArray.push(n)
        }
      })

      if(JSON.stringify(combo) === JSON.stringify(compareArray.sort())) {
        this.triggerWinner(player2);
      }
    });
  }

  triggerWinner = (name) => {
    if(window.alert(`${name} wins!`)){}
    else window.location.reload(); 
  }

  reload = () => {
    if(window.alert("It's a tie!!")){}
    else window.location.reload(); 
  }

  renderSquare = (i) => {
    return <Square key={i} value={i} onClick={this.handleClick} current={this.state.current} turn={this.state.isPlayer1Turn}/>
  }

  render() {
    this.checkWinner();
    if(this.state.clicks === 9) {
      this.reload();
    }
    return (
      <div className="game">
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
