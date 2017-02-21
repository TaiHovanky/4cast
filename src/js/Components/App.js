import React from 'react'
import CelsiusButton from './CelsiusButton'
import FahrenheitButton from './FahrenheitButton'
import Search from './Search'
import WeatherSection from './WeatherSection'

export default class App extends React.Component{
  getInitialState(){
    return {
      city: 'Your City\'s Weather',
      description: 'Weather Conditions',
      temp: 'Temperature',
      isFahrenheit: true,
      imgSrc: 'http://bit.ly/2iMfsxK'
    };
  }

  componentDidMount(){
    this.fetchWeather(city);
  }

  fetchWeather(city){
    var stateObj = this;  this.props.searchWeather(city, stateObj, function(weather){
      weather.temp = stateObj.fahrenheitConversion(weather.temp);
      var src = chooseBackground(weather.description);
      stateObj.setState({
        city: weather.city,
        description: weather.description,
        temp: weather.temp,
        imgSrc: src
      });
    });
  }

  fahrenheitConversion(kelvinTemp){
    if(kelvinTemp){
      var intTemp = parseInt(kelvinTemp*(9/5) - 459.67);
      return intTemp;
    } else {
      var fahrenheitTemp = this.state.temp*(9/5) + 32;
      this.setState({
        temp: parseInt(fahrenheitTemp)
      });
    }
  }

  celsiusConversion(){
    console.log('this',this);
    if(this.state.isFahrenheit === true){
      var celsiusTemp = (this.state.temp - 31)*(5/9);
      this.setState({
        temp: parseInt(celsiusTemp)
      });
    }
  }

  render(){
    var imgUrl = this.state.imgSrc;
    var backgroundStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',
      height: 700,
      paddingTop: 50
    };
    return (
      <div style={backgroundStyle}>
        <Search handleWeatherSearch={this.fetchWeather.bind(this)} />
        <WeatherSection city={this.state.city} temp={this.state.temp} description={this.state.description} />
        <CelsiusButton handleCelsius={this.celsiusConversion.bind(this)}/>
        <FahrenheitButton handleFahrenheit={this.fahrenheitConversion.bind(this)}/>
      </div>
    );
  }
}

function searchWeather(city, obj, callback) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=<API key here>', function(data){
    var weatherObj = {};
    weatherObj.city = city,
    weatherObj.description = data.weather[0].main;
    weatherObj.temp = data.main.temp;
    callback(weatherObj);
  });
}


function chooseBackground(skies){
  var background = "";
  if(skies === "Clear"){
    background = 'http://bit.ly/2iMfsxK';  
  } else if(skies === "Clouds"){
    background = 'http://bit.ly/2jJbudr';
  } else if(skies === "Rain"){
    background = 'http://bit.ly/2josMcv';
  } else if(skies === "Snow"){
    background = 'http://bit.ly/2jB8qvU';
  }
  return background;
}