import React, { useState } from "react";
import Select from 'react-select';

const features = await axios.get(
  'http://127.0.0.1:8000/api/features'
);
// Endpoints con

var result = [];
for(var i in features.data)
    result.push({value:features.data[i].name,label:features.data[i].name });

function ChildComponent(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Función para manejar cambios en los valores seleccionados
  const handleMultiSelectChange = (event) => {
    // const newSelectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    // setSelectedOptions(newSelectedValues);
    // Llama a la función del padre pasada como prop con los nuevos valores
    
    setSelectedOptions(event);
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
}

export default ChildComponent;
