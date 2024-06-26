import React, { useState, useEffect } from 'react';
// Endpoints connection

function send(){
	alert("se manda la reserva a bd");
}


const ChildTwo = (props) => {
const [apartaments, setApartaments] = useState([]);
const [filteredApartaments, setFilteredApartaments] = useState([]);
const fullUrl = window.location.href;
const url = new URL(fullUrl);
const baseUrl = `${url.protocol}//${url.hostname}`;


useEffect(() => {
    // Fetch all apartments
    axios.get(baseUrl+'/api/apartaments/')
      .then(response => {
        const apartaments = response.data;
        setApartaments(apartaments);
        const filtered = apartaments.filter(apartament =>
          apartament.features && apartament.features.some(feature => feature.id === Number(props.id))
        );

        setFilteredApartaments(filtered);
      })
      .catch(error => {
        console.error("Error fetching apartments:", error);
      });
  }, [props.id]);





  return (
	<div class="container">
		<div class="row">
				{filteredApartaments.map((apartament) => (
						<div class="col-md-3 property-item">
								<div class="property-slider-wrap" >
										<div class="property-slider">
                                        <img src={`${baseUrl}${apartament.image}`} alt="Apartment" className="img-fluid" />

											<div class="property-content">
												<div class="price mb-2">
													<span>{apartament.description}</span>
												</div>
												<span class="d-block mb-2 text-black-50"> </span>
												<b>Items</b>
												<div class="container">
													<div class="row">
                                                        {apartament.features.map((feature) => (
                                                            <li key={feature.id}>{feature.name}</li>
                                                        ))}

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
