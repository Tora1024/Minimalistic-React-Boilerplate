import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
	state: (state = {}) => state,
	routing,
});
