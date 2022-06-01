import * as actionType from "../actions/actionsTypes";
import updateObject from '../Utility';



const initialState = {
    users: {},
    success:true,
    error:null
}

const getApiUsers = (state, action) => {
    return updateObject(state,
        {
            success:true
        })
}

const getApiSuccessUsers = (state, action) => {
    return updateObject(state,
        {
            success:false,
            users: action.payload
        })
}

const getApiFailUsers = (state, action) => {
    return updateObject(state,
        {
            success:false,
            error:action.error
        })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_API_USERS_REQUEST_FOR_MY_TASK: return getApiUsers(state, action);
        case actionType.GET_API_USERS_SUCCESS_FOR_MY_TASK: return getApiSuccessUsers(state, action);
        case actionType.GET_API_USERS_FAIL_FOR_MY_TASK: return getApiFailUsers(state, action);
        default:
            return state;
    }
}


export default reducer;