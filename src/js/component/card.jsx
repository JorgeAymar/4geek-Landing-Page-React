import React from "react";

//create your first component

function Card(){
	return (
    <div className="card" style={{width:"350px"}}>
        <img className="card-img-top" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Card image" />
        <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Some example text.</p>
        <a href="#" className="btn btn-primary">See Profile</a>
        </div>
  </div>)
}

export default Card;
