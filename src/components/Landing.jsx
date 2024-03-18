import React from "react";
import Pic_one from "../images/111.png"
import Pic_two from "../images/222.png"
import Pic_three from "../images/333.png"
import Star from "../images/icons8-star-64.png"
import Pic from "../images/444.png"
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    return(
        <>
        <p className="txt">Toriq has passed <span>Mathematics Class</span> 30 minutes ago &bull; Irpun has passed <span>Art Class</span> 1 hour ago 	&bull; Tosan has passed <span>Cooking Class</span> 1 hour ago</p>

        <div className="main-container-landing-page">
            <div className="main-one">
                <div className="main-one-one">
                    <span className="sp1">Find your</span>
                    <img src={Pic_one} className="Pic_one" alt="" />
                    <img src={Pic_two} className="Pic_two" alt="" />
                    <img src={Pic_three} className="Pic_three"  alt="" />
                    <br />
                    <span className="sp1" >Perfect Tour</span>
                    <br />
                    <span className="sp2">We help you find the Perfect Tutor.its completely free</span>
                </div>
                <div className="main-one-two">
                    <button className="btn1">Get Started &rarr;</button>
                    <button className="btn2">Learn More</button>
                </div>
                <div className="grid">
                    <span className="grid-txt">12K +</span>
                    <span className="grid-txt">108K +</span>
                    <span className="grid-txt">210 +</span>
                    <span className="grid-txt2">Tutors</span>
                    <span className="grid-txt2">Students</span>
                    <span className="grid-txt2">Subject</span>
                </div>
                <div className=" lstdiv">
                    <img src={Star} alt="" />
                    <p>Over one million students have given a 5 star review to their tutor &rarr;</p>
                </div>
            </div>
            <div className="main-two">
                <img src={Pic} alt="" />
            </div>
            
        </div>
        <div className="last">
            <div className="lastone">
                <p>
                    Learning has <br/>Never been easier 
                </p> 
            </div>
            <div className="lasttwo">
                <p>
                Find Tutor and contest fantastic tutors according to your needs Schedule <br />your lessons with your tutor or coach from your dashboard
                </p>
            </div>
        </div>
        </>

        ) 
        
}

export default Landing;