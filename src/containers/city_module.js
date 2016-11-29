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
    return (
      <div className={this.props.showCityModule ? "city-module-container" : "city-module-container city-module-container-hide"}>
        <div className="city-module">
          <button onClick={this.handleChangeShowCityModule}>X</button>
        </div>
      </div>
      );
  }
}

CityModule.propTypes = {
  showCityModule: React.PropTypes.bool,
  changeShowCityModule: React.PropTypes.func
}

function mapStateToProps(state) {
  return { showCityModule: state.showCityModule };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeShowCityModule }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityModule);
