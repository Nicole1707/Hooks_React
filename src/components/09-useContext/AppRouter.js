import React from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Routes
} from "react-router-dom";

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
            <NavBar/>
                <Routes>
                    <Route exact path='/about' element={<AboutScreen />} />
                    <Route exact path='/login' element={<LoginScreen/>} />
                    <Route exact path='/' element={<HomeScreen/>} />
                    <Route component ={HomeScreen}/>
                </Routes>
            </div>
        </Router>
    )
}
