import * as types from '../actions/actionTypes';
import intialState from './intialState';

export default function courseReducer(state = intialState.crouses, action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
        default: 
            return state;
    }
}