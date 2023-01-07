import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
//import Login from '../login/Login'

function Register() {
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    async function handleSignup() {

        await fetch("http://localhost:5000/user", {
            method: "POST",
            body: {
                username: formInput.username,
                password: formInput.password
            }
        });

        navigate("/")
    }


    return (
        <div className="sign-up">
            <h3>Register</h3>
            <form>
                
                <input type={"text"} className="user" name="user" placeholder="username" onChange={(e) => { setFormInput({ ...formInput, username: e.target.value }) }} /><br />

                
                <input type={"password"} className="pwd" placholder="password" name="password" onChange={(e) => { setFormInput({ ...formInput, password: e.target.value }) }} /><br/>

                

                
                <input type={"password"} className="pwd" placeholder="confirm password" name="confirm-password" onChange={(e) => { setFormInput({ ...formInput, confirmPassword: e.target.value }) }} />

                {!(formInput.password === formInput.confirmPassword) &&
                    <p className="password-warn">Password and Confirm-Password must be same</p>}

               <br /> <button onClick={() => handleSignup()} disabled={!(formInput.password === formInput.confirmPassword)} className="btn">Sign Up</button>

            </form>
            <Link to="/" className="signup-btn">Member login</Link>
            
        </div>
    )
}

export default Register;