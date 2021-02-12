import React, { createContext, useState } from 'react';
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
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/ShareComponents/Footer/Footer';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

export const userContext = createContext();


const App = () => {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/home">
                        <Home/>
                    </Route>

                    <PrivateRoute path="/carInfo/:name">
                        <Navigation/>
                        <CarInfo/>
                        <Footer/>
                    </PrivateRoute>

                    <Route path="/addCar">
                        <Navigation/>
                        <AddCar/>
                        <Footer/>
                    </Route>

                    <Route path="/makeAdmin">
                        <Navigation/>
                        <MakeAdmin/>
                        <Footer/>
                    </Route>

                    <Route path="/login">
                        <Navigation/>
                        <Login/>
                        <Footer/>
                    </Route>
                    
                </Switch>
            </Router>

        </userContext.Provider>
    );
};

export default App;