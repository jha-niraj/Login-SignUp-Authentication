import { React } from "react";
import logo from '../icon.svg';

function Navbar() {	
  	return (
    	<div style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between"
		}}>
      		<div>
			  	<img src={logo} style={{width:"100px", height:"100px"}} />
      		</div>
      		<div>
				<ul>
					<li>Home</li>
					<li>Contact</li>
					<li>About Us</li>
				</ul>
			</div>
    </div>
  );
}

export default Navbar;
