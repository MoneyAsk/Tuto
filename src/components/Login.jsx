import React from "react";
import Logo from "../images/laptop.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });
    function handleChange(event){
        setUser({
            ...user,[event.target.name]: event.target.value
        })
        // console.log(user);
    }
    function sendRequest(){
        fetch("http://localhost:3000/admin/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "username":user.email,
                "password":user.password
            },
            
        }).then(response => response.json())
        .then((data) =>{
            if(!data.error && data.token ){
                alert(`Logged in Successfully`);
                localStorage.setItem("token",data.token);
                console.log(localStorage.getItem('token'));
                navigate("/about");
        }})
    }


    return (
       <>
         <p className="txt">Toriq has passed <span>Mathematics Class</span> 30 minutes ago &bull; Irpun has passed <span>Art Class</span> 1 hour ago 	&bull; Tosan has passed <span>Cooking Class</span> 1 hour ago</p>

    <div className="login-page">
        <div className="login-card">
            <img src={Logo} alt="" className="logo-login"/>
            <div className="email">
                <label htmlFor="">
                    Email Address
                </label>
                <div className="input">
                    {/* <i className="fa fa-envelope-o icon"></i> */}
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <input type="email" name="email"  value={user.email} onChange={handleChange} placeholder="Usename@email.com" />
                </div>
            </div>
            <div className="email">
                <label htmlFor="">
                    Password
                </label>
                <div className="inputp password">
                    {/* <i class="fa fa-lock icon"></i> */}
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder="············" />
                </div>
            </div>
            <button className="loginbtn" onClick={sendRequest}>Log in</button>
            <div className="footer-login-page">
                
                <span className="a1"><a href="http://localhost:5173/register" >Sign Up</a></span>
                <span className="a2"><a href="" >Forgot Password? </a></span>

            </div>
        </div>
    </div>
    </>
    )
}

export default Login;











// <h1>Login to admin dashboard</h1>
//         <br/>
//         Email - <input type={"text"} onChange={e => setEmail(e.target.value)} />
//         <br/>
//         <button>Login</button>
//         <br/>
//         New here? <a href="/register">Register</a>