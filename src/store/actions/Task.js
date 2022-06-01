import axios from "axios";
import * as actionType from "./actionsTypes";




export const getApiRequest = (email, password) => {
    return {
        type: actionType.GET_API_USERS_REQUEST_FOR_MY_TASK,
        payload: {
            email, password
        }
    }
}

export const getApiSuccess = (data) => {
    return {
        type: actionType.GET_API_USERS_SUCCESS_FOR_MY_TASK,
        payload: data
    }
}


export const getApiFailed = (error) => {
    return {
        type: actionType.GET_API_USERS_FAIL_FOR_MY_TASK,
        error: error.response && error.response.data.message ?
            error.response.data.message : error.message
    }
}


export const getApi = () => {
    return async dispatch => {
        try {
            dispatch(getApiRequest());
            const response = await axios.get("https://reqres.in/api/users/");
            dispatch(getApiSuccess(response.data));
            console.log(response.data);
        } catch (error) {
            dispatch(error);
        }
    }
}









