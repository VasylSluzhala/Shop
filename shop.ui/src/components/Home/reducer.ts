import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT, DELETE_PRODUCT} from './types';

export default function(state={}, action){
    switch (action.type){
        case FETCH_PRODUCT:
            /*const post = action.payload.data;
            const newState = {...state};
            newState[post.id] = post;
            return newState;*/
            return {...state, [action.payload.data.id]: action.payload.data};
        case FETCH_PRODUCTS:
            return _.mapKeys(action.payload.data,'Id');
        case DELETE_PRODUCT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}