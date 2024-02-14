import { React } from "react";
import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css';
const LandingPage = lazy(() => import('./components/LandingPage'));
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const SignUp = lazy(() => import("./authentication/SignUp"));
const SignIn = lazy(() => import("./authentication/SignIn"));
const MainPage = lazy(() => import("./components/MainPage"));

function App() {
    const [count, setCount] = useState(0);

    return (
		<Router>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Loading...</div>}>
						<LandingPage /> 
					</Suspense>
				} />
				<Route path="/signup" element={
					<Suspense fallback={<div>Loading...</div>}>
						<SignUp /> 
					</Suspense>
				} />
				<Route path="/signin" element={ 
					<Suspense fallback={<div>Loading...</div>}>
						<SignIn />
					</Suspense>
				} />
				<Route path="/mainPage" element={
					<Suspense fallback={<div>Loading...</div>}>
						<MainPage />
					</Suspense>
				} />
			</Routes>
		</Router>
    )
}

export default App;
