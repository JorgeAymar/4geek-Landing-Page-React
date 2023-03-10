import React from "react";

//create your first component

function Navbar(){
	return (
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    
      <div class="container-fluid">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </div>
    
    </nav>
)}

export default Navbar;