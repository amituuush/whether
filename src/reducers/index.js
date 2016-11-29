import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ShowCityModuleReducer from './reducer_show_city_module';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  showCityModule: ShowCityModuleReducer
});

export default rootReducer;
