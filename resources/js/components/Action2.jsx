import React, { useState, useEffect } from 'react';
// Endpoints connection



var myId = "";

const ChildTwo = (props) => {
  const [featuresapartaments, setFeaturesApartaments] = useState([]);
  const [features, setFeatures] = useState([]);
  if (props.id != myId) {
    myId = props.id;
    // Endpoints connection single 
	 let json=JSON.stringify(props.id);
	
	
    axios.get(
      'http://127.0.0.1:8000/api/apartamentsfeature/' + json
    ).then(response => {
      const apartaments = response.data
      setFeaturesApartaments(apartaments)
    })


  }

  return (
		<div class="container">
			{props.id}
				<div class="row">
				{apartaments.map((apartament) => (
						<div class="col-md-3">
						<p>{apartament.title}</p>
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
															{/* <ChildTree id={features.id}/>				 */}
														</div>
													</div>
												<div class="mt-4 ml-10" >
													<a onClick={handleDownload}  class="btn btn-house ">reserve</a>
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