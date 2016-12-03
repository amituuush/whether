import { FETCH_CITY_HISTORY } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_CITY_HISTORY:
    console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
