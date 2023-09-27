import React, { useState } from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom/client';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'pear', label: 'Pear' },
  { value: 'grape', label: 'Grape' },
];
 
const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
 
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
 
  return (
    <div>
      <Select
        options={options}
        isMulti
        onChange={handleMultiSelectChange}
        value={selectedOptions}
      />
    </div>
  );
};
 
export default MultiSelectDropdown;

ReactDOM.createRoot(document.getElementById("example")).render(<MultiSelectDropdown/>);
