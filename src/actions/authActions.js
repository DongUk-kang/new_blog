import { TEST } from "./types"

//

export const registerUser = userData => {
    return {
        type: TEST,
        payload: userData
    };
};