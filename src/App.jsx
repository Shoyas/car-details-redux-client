import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './components/Home/Home/Home';
import CarInfo from './components/CarInfo/CarInfo';
import Navigation from './components/ShareComponents/Navigation/Navigation';
import AddCar from './components/AddCar/AddCar';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/home">
                    <Home/>
                </Route>

                <Route path="/carInfo/:name">
                    <Navigation/>
                    <CarInfo/>
                    
                </Route>

                <Route path="/addCar">
                    <Navigation/>
                    <AddCar/>
                </Route>

                
            </Switch>
        </Router>
    );
};

export default App;