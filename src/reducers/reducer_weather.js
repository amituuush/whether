import { FETCH_WEATHER, DELETE_CITY } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    case DELETE_CITY:
      return state.filter(function(city) {
        return city.city.id !== action.cityId;
      })
  }
  return state;
}
