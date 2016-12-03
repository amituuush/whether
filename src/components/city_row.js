import React, { Component } from 'react';
import GoogleMap from './google_map';
import Chart from './chart';

export default class CityRow extends Component {

  constructor(props) {
    super(props);

    this.handleSelectCityModule = this.handleSelectCityModule.bind(this);
  }

  handleSelectCityModule() {
    const cityId = this.props.cityData.city.id;
    this.props.fetchCurrentWeather(cityId);
    this.props.changeShowCityModule();
  }

  render() {
    const cityData = this.props.cityData;

    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


  return (
      <tr className="city-row" onClick={this.handleSelectCityModule} key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
  );
}
}

CityRow.propTypes = {
  cityData: React.PropTypes.object,
  changeShowCityModule: React.PropTypes.func,
  fetchCurrentWeather: React.PropTypes.func
}
