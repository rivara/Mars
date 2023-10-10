import React, { useState, useEffect } from 'react';
import Part3  from "./Action3";
// Endpoints connection

function send(){
	alert("ss");
}


var myId = "";
const ChildTwo = (props) => {
  const [apartaments, setApartaments] = useState([]);
  if (props.id != myId) {
	
    myId = props.id;
    // Endpoints connection single 
	 let json=JSON.stringify(props.id);
    axios.get(
      'http://127.0.0.1:8000/api/apartamentsfeature/'+json
    ).then(response => {
      const apartaments = response.data
      setApartaments(apartaments)
    })
	
  }

  return (
	<div class="container">
		<div class="row">
				{apartaments.map((apartament) => (
						<div class="col-md-3 property-item">
								<div class="property-slider-wrap" >
										<div class="property-slider">
											<img src={apartament.image} alt="Image" class="img-fluid" />
											<div class="property-content">
												<div class="price mb-2">
													<span>{apartament.description}</span>
												</div>
												<span class="d-block mb-2 text-black-50"> </span>
												<b>Items</b>
												<div class="container">
													<div class="row">
														<Part3 id={apartament.id} />
													</div>
												</div>	
												<div class="mt-4 ml-10" >
													<a onClick={send}  class="btn btn-house">reserve</a>
												</div>
											</div>
										</div>
								</div>
						</div>			 
						))}
			</div>
	</div>
  );
};
export default ChildTwo;