import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeShowCityModule } from '../actions/showCityModule';
import { deleteCity } from '../actions/index';
import moment from 'moment';

class CityModule extends Component {
  constructor(props) {
    super(props);

    this.handleChangeShowCityModule = this.handleChangeShowCityModule.bind(this);

    this.handleDeleteCity = this.handleDeleteCity.bind(this);
  }

  handleChangeShowCityModule() {
    this.props.changeShowCityModule();
  }

  handleDeleteCity() {
    var cityId = this.props.selectedCity.data.id;
    this.props.deleteCity(cityId);
    this.handleChangeShowCityModule();
  }

  render() {

    if (this.props.selectedCity === null) {
      var cityModule = <div className="city-module">
        <button type="button" className="btn btn-default" onClick={this.handleChangeShowCityModule}>Close</button>
      </div>;
    } else {

      const selectedCityData = this.props.selectedCity.data;
      const temp = Math.round(selectedCityData.main.temp * (9/5) - 459.67);
      console.log(selectedCityData);
      const date = moment().format('llll');

      var cityModule =
      <div className="city-module">
        <div className="city-name">{selectedCityData.name}<br /> current weather for <br />{date}</div>
        <div className="city-temp">{temp}°F</div>
        <div className="city-metrics">
          <div className="city-metrics-col-1">
            <p><span>Pressure:</span> {selectedCityData.main.pressure}hPa</p>
            <p><span>Humidity:</span> {selectedCityData.main.humidity}%</p>
          </div>
          <div className="city-metrics-col-2">
            <p><span>Cloudiness:</span> {selectedCityData.clouds.all}%</p>
            <p><span>Wind speed:</span> {selectedCityData.wind.speed} m/s</p>
          </div>
        </div>
        <div className="city-button-container">
          <button type="button" className="btn btn-default btn-close" onClick={this.handleChangeShowCityModule}>Close</button><button type="button" className="btn btn-default btn-delete" onClick={this.handleDeleteCity}>Delete</button>
        </div>
      </div>;
    }

    return (
      <div className={this.props.showCityModule ? "city-module-container" : "city-module-container city-module-container-hide"}>
        {cityModule}
      </div>
      );
  }
}

CityModule.propTypes = {
  showCityModule: React.PropTypes.bool,
  changeShowCityModule: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    showCityModule: state.showCityModule,
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeShowCityModule, deleteCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityModule);
