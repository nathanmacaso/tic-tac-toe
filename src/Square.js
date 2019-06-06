import React, { Component } from 'react'

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(parseInt(nextProps.current[0]) === nextState.value){
      return true
    }
    return false
  }

  render() {
    const {value, current, turn, onClick} = this.props;
    const disabled = parseInt(current) === value ? 'disabled': '';
    let text;
    if(!turn) {
      text = parseInt(current) === value ? 'X': '';
    } else {
      text = parseInt(current) === value ? 'O': '';
    }
    return (
      <div className={`square-${value}`}>
        <button className='btn-square' disabled={disabled} value={value} onClick={onClick}>
          {text}
        </button>
      </div>
    )
  }
}
