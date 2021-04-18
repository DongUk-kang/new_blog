import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types"
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";


//

export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

export const loginUser = (userData) => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            const {token} = res.data

            // save to local storge
            localStorage.setItem("token", token)

            // decode token to get userdata

            setAuthToken(token);

            const decoded = jwt_decode(token);

            dispatch(setCurrentUser(decoded))

            // dispatch({
            //     type: SET_CURRENT_USER,
            //     payload: token
            // })


        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

//Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}