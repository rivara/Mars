import React, { useState, useEffect } from 'react';
// Endpoints connection



var myId = "";

const ChildTwo = (props) => {
  const [features, setFeatures] = useState([]);
  if (props.id != myId) {
    myId = props.id;
    // Endpoints connection single 
	// let data=[1,2,3,4,5];
	 let json=JSON.stringify(props.id);
	
	
    axios.get(
      'http://127.0.0.1:8000/api/apartamentsfeature/' + json
    ).then(response => {
      const products = response.data
      setFeatures(products)
    })
  }

  return (
		<div class="container">
			{props.id}
				<div class="row">
				{features.map((feature) => (
						<div class="col-md-3">
						<p>{feature.title}</p>
						<div class="property-slider">
								<img src="http://127.0.0.1:8000/storage/img/img_1.jpg" alt="Image" class="img-fluid" />
								<div class="property-content">
										<div class="price mb-2">
											<span>$1,291,000</span>
										</div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<b>Items</b>
											<div class="container">
													<div class="row">
															<div class="col-md-4">
																<span class="caption">
																	 <p>#algo</p>
																</span>
															</div>
															<div  class="col-md-4">
																<span class="caption">
																	<p>2 baths</p>
																</span>
															</div>
															<div  class="col-md-4">
																<span class="caption">
																	<p>2 baths</p>
																</span>
															</div>	
															<div class="col-md-4">
																<span class="caption">
																	<p>#algo</p>
																</span>
															</div>
															<div  class="col-md-4">
																<span class="caption">
																	<p>2 baths</p>
																</span>
															</div>
															<div  class="col-md-4">
																<span class="caption">
																	<p>2 baths</p>
																</span>
															</div>	
														</div>
													</div>
												<div class="mt-4 ml-10" >
													<a href="property-single.html" class="btn btn-house ">See details</a>
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