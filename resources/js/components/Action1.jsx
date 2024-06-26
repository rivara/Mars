import React, { useState, useEffect } from "react";
import axios from "axios";

function ChildComponent(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [features, setFeatures] = useState([]);
  const fullUrl = window.location.href;
  const url = new URL(fullUrl);
  const baseUrl = `${url.protocol}//${url.hostname}`;

  // Función para manejar cambios en los valores seleccionados
  const handleMultiSelectChange = (event) => {
    const newSelectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(newSelectedValues);
    props.onSelectedValuesChange(newSelectedValues);
  };


  // Efecto para obtener las features al montar el componente
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(baseUrl+'/api/features/');

        setFeatures(response.data);
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div>
      <select className="form-select" multiple onChange={handleMultiSelectChange} value={selectedOptions}>
        {features.map((feature) => (
          <option key={feature.id} value={feature.id}>{feature.name}</option>
        ))}
      </select>
    </div>
  );
}

export default ChildComponent;
