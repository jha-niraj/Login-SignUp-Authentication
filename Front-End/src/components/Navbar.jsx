import { React } from "react";
import { useNavigate } from "react";

function Navbar() {
	const navigate = useNavigate();
	function handleSignUp() {
		navigate('/signup');
	}
	
  	return (
    	<div>
      		<div>
			  	<img src={logo} style={{width:"100px", height:"100px"}} />
      		</div>
      		<div>
				<ul>
					<button>Home</button>
					<button>Contact</button>
					<button>About Us</button>
					<button onClick={handleSignUp}>SignUp</button>
					<button onClick={handleSignin}>SignIn</button>
				</ul>
			</div>
    </div>
  );
}

export default Navbar;
