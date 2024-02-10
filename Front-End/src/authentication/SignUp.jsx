import { useNavigate } from "react-router-dom";
import '../App.css';

function SignUp() {
	const navigate = useNavigate();
	function referToLandingPage() {
		navigate('/signin');
	}

    return (
		<div>
			<label htmlFor="fullName">Name: </label>
			<input type="text" id="fullName" placeholder="Enter your Name" /><br />
			<label htmlFor="username">Username: </label>
			<input type="text" placeholder="Enter username" />
			<label htmlFor="password">Password: </label>
			<input type="password" placeholder="Create a Password" />
			<button onClick={referToLandingPage}>Sign Up</button>
		</div>
	)
}

export default SignUp;