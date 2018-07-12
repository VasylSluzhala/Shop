import { combineReducers } from 'redux';
import HomeReducer from '../components/Home/reducer';
import CartReducer from '../components/Cart/reducer';

const rootReducer = combineReducers({
    products: HomeReducer,
    cart: CartReducer
});

export default rootReducer;