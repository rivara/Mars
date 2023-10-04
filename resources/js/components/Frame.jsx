import React, { useState } from "react";

function ChildComponent(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Función para manejar cambios en los valores seleccionados
  const handleMultiSelectChange = (event) => {
    const newSelectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(newSelectedValues);

    // Llama a la función del padre pasada como prop con los nuevos valores
    props.onSelectedValuesChange(newSelectedValues);
  };

  return (
    <div>
      <select multiple onChange={handleMultiSelectChange} value={selectedOptions}>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
    </div>
  );
}

export default ChildComponent;
