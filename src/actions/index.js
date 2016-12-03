import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';
export const FETCH_CITY_HISTORY = 'FETCH_CITY_HISTORY';

const API_KEY = '9f8096150320ee489d53e2c5af546d53';
const FORECAST_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const CURRENT_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

//http://api.openweathermap.org/data/2.5/weather?appid=9f8096150320ee489d53e2c5af546d53?id=2172797

export function fetchWeather(city) {
  const url = `${FORECAST_ROOT_URL}&q=${city}, us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function fetchCurrentWeather(cityId) {
  const url = `${CURRENT_ROOT_URL}&id=${cityId}`;
  const request = axios.get(url);

  return {
    type: FETCH_CITY_HISTORY,
    payload: request
  }
}

export function deleteCity(cityId) {
  return {
    type : DELETE_CITY,
    cityId: cityId
  }
}
