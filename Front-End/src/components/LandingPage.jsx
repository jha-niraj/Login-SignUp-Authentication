import '../App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './components.css';
import mainPhoto from './mainPhoto.png';

function LandingPage() {
	return (
		<div>
			<Navbar />
			<div className="main-page">
				<div className='firstPart'>
					<img style={{
						width:"90%",
						height: "80%",
						borderRadius:"20px"
					}} src={mainPhoto} alt="To-Do Photo" />
				</div>
				<div className='secondPart'>
					<h1>Do your work, we will take care of timings</h1>
					<h2>Scroll down to read more about us</h2>
				</div>
			</div>
			<Footer />
		</div>	
	);
}

export default LandingPage;
