import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeShowCityModule, deleteCity } from '../actions/showCityModule';
import { fetchCurrentWeather } from '../actions/index';
import CityRow from '../components/city_row';

class WeatherList extends Component {

  render() {

    var cityRow = this.props.weather.map(cityData => {
      return <CityRow
              cityData={cityData}
              changeShowCityModule={this.props.changeShowCityModule}
              fetchCurrentWeather={this.props.fetchCurrentWeather}
              key={cityData.city.name}/>
    });

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
          {cityRow}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
  weather: React.PropTypes.array,
  changeShowCityModule: React.PropTypes.func
}

// whatever is returned here will show up as props on WeatherList
function mapStateToProps(state) {
  return {
    weather: state.weather,
    selectedCity: state.selectedCity
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeShowCityModule, fetchCurrentWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
