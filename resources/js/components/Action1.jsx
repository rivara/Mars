import React, { useState } from "react";


// Endpoints connection
const featuresRaw = await axios.get(
  'http://127.0.0.1:8000/api/features'
);



function ChildComponent(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [features, setFeatures] = useState(featuresRaw.data);

  // Función para manejar cambios en los valores seleccionados
  const handleMultiSelectChange = (event) => {
 
    const newSelectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(newSelectedValues);
    props.onSelectedValuesChange(newSelectedValues);
  };



  return (
    <div>
      <select class="form-select" multiple onChange={handleMultiSelectChange} value={selectedOptions}>
        {features.map((feature) => (
          <option value={feature.id}>{feature.name}</option>
        ))}
       </select>
    </div>
  );
}

export default ChildComponent;
