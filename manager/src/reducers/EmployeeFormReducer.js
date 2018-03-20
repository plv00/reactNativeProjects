import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={
    name: '',
    phone: '',
    shift: ''
};

/*
 Numbers of way to default shift so there won't be an error with user doesn't pick shift
    1) Monday
        con - if changing to hours of day instead of day, then need to change picker form and reducer
    2) add componentWillMount to EmployeeCreate.js and call and action to default manually to Monday
    3) add default to onButtonPress() in EmployeeCreate.js
*/

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
        // clear state after creating new employee
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};