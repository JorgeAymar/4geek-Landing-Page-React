import React from "react";

//create your first component

function Card(){
	return (
    <div className="card m-2" style={{width:"320px"}}>
        <img className="card-img-top" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-center">Card Title</h4>
          <p className="card-text d-flex justify-content-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <a href="#" className="btn btn-primary d-flex justify-content-center" style={{width:"150px"}}>Find out More!</a>
        </div>
  </div>
)}

export default Card;
