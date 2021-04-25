import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import setAuthToken from "./utils/setAuthToken";


const initialSate = {};
const middlware = [thunk];

const store = createStore(
    rootReducer,
    initialSate,
    // compose(
    //     applyMiddleware(...middlware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    composeWithDevTools(applyMiddleware(...middlware))
);

let currentState = store.getState();

store.subscribe(() => {
    //keep track of the prevuous and current state to compare changes
    let previousState = currentState;
    currentState = store.getState();

    // if the token changes set the valut in localstorage and axios headers
    if (previousState.auth.token !== currentState.auth.token) {
        const token = currentState.auth.token;
        setAuthToken(token)
    }
})

export default store