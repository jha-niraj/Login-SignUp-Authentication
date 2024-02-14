import { React } from "react";
import logo from '../icon.svg';
import './components.css';
import { useNavigate } from "react-router-dom";

function Navbar() {	
	const navigate = useNavigate();

	function handleSignUp() {
		navigate('/signup');
	}
	function handleSignIn() {
		navigate('/signin');
	}
	return (
		<div className="main-container">
			<div className="firstChild">
				<img src={logo} style={{width:"100px", height:"100px"}} />
			</div>
			<div className="secondChild">
				<ul className="list">
					<li>Home</li>
					<li>Contact</li>
					<li>About Us</li>
					<button onClick={handleSignUp} className="btn">Sign Up</button>
					<button onClick={handleSignIn} className="btn">Main Page</button>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
