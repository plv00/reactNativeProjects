import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE ={
    name: '',
    phone: '',
    shift: ''
};

export default (state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            /*
                action.payload === { prop: 'name', value: 'jane' }
                es6 [ ] is not an array but key interpolation
                without it would be like the below
                const newState ={};
                newState[action.payload.prop] = action.payload.
            */
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state;
    }
};