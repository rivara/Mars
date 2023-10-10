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
      const apartamentsfeatures = response.data
      setFeaturesApartaments(apartamentsfeatures)
    })

	
   
  	
  }

  return (
		<div class="container">
			{props.id}
				<div class="row">
				{features.map((feature) => (
						
						<div class="col-md-4">
							<span class="caption">
								<span >#algo</span>
							</span>
						</div>
						
						
						))}
				</div>
		</div>
  );
};
export default ChildTwo;