import { React } from "react";

function Footer() {
    return (
    	<div style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between"
		}}>
      		<div>
				<h3>Copyright @ Niraj Jha</h3>
			</div>
      		<div>
				<a href="https://www.github.com/jha-niraj" target="_blank">Niraj Jha</a>
				<a href="https://www.google.com" target="_blank">Sonali Jha</a>
			</div>
    	</div>
  	);
}

export default Footer;
