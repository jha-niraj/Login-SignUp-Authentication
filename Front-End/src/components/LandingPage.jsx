import { useNavigate } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function LandingPage() {
	const navigate = useNavigate();

	function handleSignUp() {
		navigate('/signup');
	}
	function handleSignIn() {
		navigate('/signin');
	}

  	return (
    	<div>
      		<Navbar />
			<div>
				<button onClick={handleSignUp}>Sign Up</button>
				<button onClick={handleSignIn}>Sign In</button>
			</div>
			<Footer />
    	</div>
  	);
}

export default LandingPage;
