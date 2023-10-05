import React, { useState } from "react";

const flatsRaw = await axios.get(
  'http://127.0.0.1:8000/api/apartaments/1'
);

const response = await axios.get(`/api/session/${this.roomId}`)

const [flats, setFlats] = useState(flatsRaw.data);




const ChildTwo = (props) => {

  // Endpoints connection




  return (
      <div className="child second">
        <div>
         <h4>{props.message}</h4>

         {flats.map((flat) => (
          <p>{flat.id}</p>
        ))}


        </div>
      </div>
    );
  };
  
  export default ChildTwo;