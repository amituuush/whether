import { SHOW_CITY_MODULE } from '../actions/showCityModule';

export default function (state = false, action){
  switch(action.type) {
    case SHOW_CITY_MODULE:
      return !state;
    default:
      return state;
  }
}
