const WeatherSection = (props) => {
  return (
   <div style={{marginBottom: 30}}>
    <h1>{props.city}</h1>
    <h3>{props.temp}</h3>
    <h3>{props.description}</h3>
   </div>
  )
}

 export default WeatherSection