import { React } from "react";
import logo from '../public/icon.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
		<Router>
			<Routes>
				<Route path="/" element={ <LandingPage /> } />
				<Route path="/signup" element={ <signup /> } />
				<Route path="/signin" element={ <signin /> } />
				<Route path="/mainPage" element={ <mainPage /> } />
			</Routes>
		</Router>
    )
}

export default App;
