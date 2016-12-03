import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ShowCityModuleReducer from './reducer_show_city_module';
import SelectedCityReducer from './reducer_selected_city';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  selectedCity: SelectedCityReducer,
  showCityModule: ShowCityModuleReducer
});

export default rootReducer;
