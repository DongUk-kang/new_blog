import React from 'react';
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";

import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Landing />
            <Footer />
        </div>
    );
};

export default App;
