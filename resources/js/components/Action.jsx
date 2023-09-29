import React, { useState } from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom/client';
import axios from 'axios'



// Endpoints connection
const features = await axios.get(
  "http://127.0.0.1:8000/api/feature"
);

var result = [];
for(var i in features.data)
    result.push({value:features.data[i].name,label:features.data[i].name });


const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
 
  const handleMultiSelectChange = (selectedOptions) => {
  //  setSelectedOptions(selectedOptions);
  alert("dd");
  };
 
  return (
    <div>
      <Select
        options={result}
        isMulti
        onChange={handleMultiSelectChange}
        value={selectedOptions}
      />
    </div>
  );
};
 
export default MultiSelectDropdown;

ReactDOM.createRoot(document.getElementById("example")).render(<MultiSelectDropdown/>);
