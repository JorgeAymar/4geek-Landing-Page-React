import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx"

//create your first component

function Cimiento(){
	return (<div> 
		<div>
			<Navbar/>
		</div>
		
		<div>
			<Jumbotron/>
		</div>
		
		<div className="row p-3">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>

		<div><Footer/> </div>
	</div>)
}

export default Cimiento;
