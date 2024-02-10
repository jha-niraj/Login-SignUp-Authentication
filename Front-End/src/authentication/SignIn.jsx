import { useNavigate } from "react-router-dom";
import "../App.css";

function SignIn() {
  const navigate = useNavigate();
  function referToMainPage() {
    navigate("/mainPage");
  }

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" placeholder="Enter username" /><br />
      <label htmlFor="password">Password: </label>
      <input type="password" placeholder="Enter your Password" /><br />
      <button onClick={referToMainPage}>Sign In</button>
    </div>
  );
}

export default SignIn;
