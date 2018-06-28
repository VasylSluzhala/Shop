import { combineReducers } from 'redux';
import HomeReducer from '../components/Home/reducer';

const rootReducer = combineReducers({
    products: HomeReducer
});

export default rootReducer;