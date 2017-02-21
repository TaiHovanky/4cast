import React from 'react'

export default class Search extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    var cityInput = this.refs.citySearch;
    this.props.handleWeatherSearch(cityInput.value);
  }

  render() {
    return (
        <div>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form-control" type="text" ref="citySearch"></input>
        <input type="submit" className="btn"></input>
        </form>
        </div> 
    )
  }
}