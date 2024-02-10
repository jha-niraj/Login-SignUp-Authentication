import { React } from "react";
import { useState, useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import MainPage from "./components/MainPage";

function App() {
    const [count, setCount] = useState(0);

    return (
		<Router>
			<Routes>
				<Route path="/" element={ <LandingPage /> } />
				<Route path="/signup" element={ <SignUp /> } />
				<Route path="/signin" element={ <SignIn /> } />
				<Route path="/mainPage" element={ <MainPage /> } />
			</Routes>
		</Router>
    )
}

export default App;
