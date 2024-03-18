import React from "react";
import '../App.css'
import Logo from '../images/laptop.png'
import { Navigate, useNavigate } from "react-router-dom";
export default function Navbar(){
  const navigate = useNavigate();
    return(
        <>
        <nav className="navbar">
          <div className="nav1">
            <img src={Logo} alt="" />
            <span>Tuto</span>
          </div>
          <div className="nav2"> 
            <a href="http://localhost:5173/">For Students</a>
            <a href="">Resources</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <button onClick={
              ()=>{
                navigate('/login');
              }
            }>Log In</button>
          </div>  
        </nav>
        {/* <p className="txt">Toriq has passed <span>Mathematics Class</span> 30 minutes ago &bull; Irpun has passed <span>Art Class</span> 1 hour ago 	&bull; Tosan has passed <span>Cooking Class</span> 1 hour ago</p> */}
        </>
    )
}