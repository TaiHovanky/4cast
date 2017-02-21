import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'

// var Search = React.createClass({
//   handleSubmit: function(e){
//     e.preventDefault();
//     var cityInput = this.refs.citySearch;
//     this.props.handleWeatherSearch(cityInput.value);
//   },
//   render: function(){
//   return (
//     <div>
//       <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
//       <input className="form-control" type="text" ref="citySearch"></input>
//       <input type="submit" className="btn"></input>
//       </form>
//     </div> 
//   );
//   }
// });

// var WeatherSection = function(props){
//   return (
//    <div style={{marginBottom: 30}}>
//     <h1>{props.city}</h1>
//     <h3>{props.temp}</h3>
//     <h3>{props.description}</h3>
//    </div>
//   );
//  }

// var CelsiusButton = React.createClass({
//   handleClick: function(){
//     this.props.handleCelsius()
//   },
//   render: function(){
//     var btnStyle = {
//       marginRight: 10
//     };
//     return <button style={btnStyle} onClick={this.handleClick.bind(this)} className="btn">Celsius</button> 
//   }
// });

// var FahrenheitButton = React.createClass({
//   handleClick: function(){
//     this.props.handleFahrenheit()
//   },
//   render: function(){
//     var btnStyle = {
//       marginLeft: 10
//     };
//     return <button style={btnStyle} onClick={this.handleClick.bind(this)} className="btn">Fahrenheit</button>
//   }
// });

ReactDOM.render(<App searchWeather={window.searchWeather}/>, document.getElementById('app'));