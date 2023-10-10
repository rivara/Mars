import React, { useState, useEffect } from 'react';
// Endpoints connection



var myId = "";

const ChildTwo = (props) => {
  const [featuresapartaments, setFeaturesApartaments] = useState([]);

  if (props.id != myId) {
    myId = props.id;
    // Endpoints connection single 
	 let json=JSON.stringify(props.id);
    axios.get(
      'http://127.0.0.1:8000/api/featureapartament/' + json
    ).then(response => {
      const featureapartament = response.data
      setFeaturesApartaments(featureapartament)
    })

	
   
  	
  }

  return (
		<div class="container">
			{props.id}
				<div class="row">
				{featuresapartaments.map((feature) => (
						
						<div class="col-md-12">
							<span class="caption">
								<span >{feature.name}</span>
                
							</span>
						</div>
						
						
						))}
				</div>
		</div>
  );
};
export default ChildTwo;