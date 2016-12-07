import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import CityModule from '../containers/city_module';
import NavBar from './NavBar';
import styles from '../../style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <div className="app-content">
          <h1>Whether</h1>
          <SearchBar />
          <WeatherList />
          <CityModule />
        </div>
      </div>
    );
  }
}
