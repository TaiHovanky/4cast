import React from 'react'

export default class CelsiusButton extends React.Component{
  handleClick() {
    this.props.handleCelsius()
  }

  render() {
    var btnStyle = {
      marginRight: 10
    };
    return <button style={btnStyle} onClick={this.handleClick.bind(this)} className="btn">Celsius</button> 
  }
}