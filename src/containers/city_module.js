import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeShowCityModule } from '../actions/showCityModule';

class CityModule extends Component {
  constructor(props) {
    super(props);

    this.handleChangeShowCityModule = this.handleChangeShowCityModule.bind(this);
  }

  handleChangeShowCityModule() {
    this.props.changeShowCityModule();
  }


  render() {

    if (this.props.selectedCity === null) {
      var cityModule = <div className="city-module">
        <button onClick={this.handleChangeShowCityModule}>X</button>
      </div>;
    } else {
      const selectedCityData = this.props.selectedCity.data;
      const temp = Math.round(selectedCityData.main.temp * (9/5) - 459.67);
      console.log(selectedCityData);
      var cityModule = <div className="city-module">
        {selectedCityData.name}
        {temp}
        <button onClick={this.handleChangeShowCityModule}>X</button>
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
  return bindActionCreators({ changeShowCityModule }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityModule);
