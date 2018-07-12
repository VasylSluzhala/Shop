
import _ from 'lodash';
import { ADD_TO_CART, SUBSTRACT_FROM_CART } from './types';

export default function(state = {}, action){
    switch (action.type){
        case ADD_TO_CART:
            const index = _.findKey(state, a=> a.item.Id === action.payload.Id);
            if(!index){
                return { ...state, 
                    [action.payload.Id] : { item: action.payload, amount: 1}
                };
            }
            else{
                state[index].amount++;
                return {...state};
            }
        case SUBSTRACT_FROM_CART:
            const id = _.findKey(state, a=> a.item.Id === action.payload.Id);
            if(!id) {
                return state;
            }
            else if(state[id].amount > 1){
                state[id].amount--;
                return {...state};
            }
            else{
                return _.omit(state, [id]);
            }
        default:
            return state;
    }
}