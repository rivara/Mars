import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'


// Endpoints connection
const features = await axios.get(
  'http://127.0.0.1:8000/api/features'
);
// Endpoints connection
const raw = await axios.get(
  'http://127.0.0.1:8000/api/apartaments'
);


var result = [];
for(var i in features.data)
    result.push({value:features.data[i].name,label:features.data[i].name });

    function MultiSelectDropdown(props) {
  
  // const [apartaments, setApartaments] = useState(raw.data);
  // setApartaments(raw.data);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const handleMultiSelectChange = (selectedOptions) => {
  //   setSelectedOptions(selectedOptions);
  //};
  

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleMultiSelectChange = (value) => {
    setSelectedOptions(value);
    props.onValueChange(value)
    
  };

  return (
    <div>
      <div>
        <Select
          options={result}
          isMulti
           onChange={handleMultiSelectChange}
           value={selectedOptions}
        />
      </div>
  </div>  
  );
};
 
export default MultiSelectDropdown;
