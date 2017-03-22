import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
    switch(action.type) {
    case FETCH_WEATHER:
        return [action.payload.data, ...state]; //equivalente a: state.concat([action.payload.data]);
    }
    
    return state;
}