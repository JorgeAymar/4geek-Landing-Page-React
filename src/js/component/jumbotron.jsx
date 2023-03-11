import React from "react";

//create your first component

function Jumbotron(){
	return (
    <div class="mt-4 p-4 bg-secondary text-white rounded">
      <h1>Warm Wellcome to the site</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p class="lead p-3">
            <a class="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
        </p>
    </div>
)}

export default Jumbotron;