// import { TEST } from "../actions/types"
import { SET_CURRENT_USER} from "../actions/types"

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    "userdata": "donguk"
                }
            }
        // case TEST:
        // return {
        //     ...state,
        //     user: action.payload
        // }

        default:
            return state;
    }
}