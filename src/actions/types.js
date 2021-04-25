// export const TEST = 'TEST'
// import axios from "axios";

export const GET_ERRORS = 'GET_ERRORS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

// export const registertUser = (userData, history) => dispatch => {
//     axios
//         .post('/api/users/register', userData)
//         .then(res => history.push('/login'))
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         )
// }
//
// export const loginUser = (userData) => dispatch => {
//     axios
//         .post('/api/users/login', userData)
//         .then(res => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         })
// }