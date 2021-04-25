import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";
import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import MainScreen from "./Components/Main/MainScreen";
import store from "./store";

import "./App.css"
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authActions";

const App = () => {
    useEffect(() => {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
        }
        store.dispatch(setCurrentUser());

        window.addEventListener('storage', () => {
            if (!localStorage.jwtToken) (
                store.dispatch()
             )
        })
    }, [])
    return (
        // <div className="App">
        //     <Navbar />
        //     <Landing />
        //     <Footer />
        // </div>
        <Provider store={store}>
            <Router>
                <div className={"App"}>
                    <Navbar />
                    <Route exact path={"/"} component={Landing} />
                    <div className={"container"}>
                        <Route exact path={"/signup"} component={Signup} />
                        <Route exact path={"/login"} component={Login} />
                        <Route exact path={"/home"} component={MainScreen} />
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>

    );
};

export default App;
