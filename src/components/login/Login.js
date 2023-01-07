import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    {/*const { setLogin } = props.setLogin;*/}
    const [formInput, setFormInput] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    return (
        <div className="sign-up">
            <h3>MEMBER LOGIN</h3>
            <form>
                
                <input type={"text"} className="user" placeholder="username" name="username" onChange={(e) => { setFormInput({ ...formInput, username: e.target.value }) }} /><br />

                
                <input type={"password"} className="pwd" placeholder="password" name="password" onChange={(e) => { setFormInput({ ...formInput, password: e.target.value }) }} /><br />

                <button 
                className="btn"
                onClick={() => {
                    alert("Login Successfully !");
                    navigate("/home");
                }}>Login</button>
            </form>
            
            <Link to="/register" className="signup-btn">Register</Link>
        </div>
    )
}

export default Login;