import React from "react";
export default function Card(props) {
    return(
        <div className="card">
           <div>
          
           <img src={props.imageLink}  className="course-image" alt="" />

           </div>
           <div className="course-card-details">
                <div>Title: {props.title} </div>
                <div>Description: {props.description}</div>
                <div>Price: {props.price}</div>
                
           </div>
        </div>
)}