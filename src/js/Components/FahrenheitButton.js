export default class FahrenheitButton extends React.Component{
  handleClick() {
    this.props.handleFahrenheit()
  }

  render() {
    var btnStyle = {
      marginLeft: 10
    };
    return <button style={btnStyle} onClick={this.handleClick.bind(this)} className="btn">Fahrenheit</button>
  }
}