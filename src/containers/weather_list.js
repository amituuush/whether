import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeShowCityModule } from '../actions/showCityModule';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.handleChangeShowCityModule = this.handleChangeShowCityModule.bind(this);
  }

  handleChangeShowCityModule() {
    console.log('yooo');
    this.props.changeShowCityModule();
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr onClick={() => this.handleChangeShowCityModule.bind(this)} key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propType = {
  weather: React.PropTypes.array,
  changeShowCityModule: React.PropTypes.func
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeShowCityModule }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(WeatherList);
