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

		<div className="container-fluid">		
			<div className="row row-cols-2 row-cols-lg-5 g-4 g-lg-4 p-3 justify-content-center">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>

		<div>
			<Footer/> 
		</div>
	</div>)
}

export default Cimiento;
