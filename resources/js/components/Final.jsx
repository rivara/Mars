import { useState } from "react";
import ChildOne from "./Action1";
import ChildTwo  from "./Action2";


const Final = () => {
  const [selectedValues, setSelectedValues] = useState([])
  // Función para manejar cambios en los valores seleccionados
  const handleChildValueChange = (newSelectedValues) => {
    setSelectedValues(newSelectedValues);
  };

  return (
    <div className="parent">
      <div className="children-container">
       
        <ChildOne onSelectedValuesChange={handleChildValueChange} />
        <ChildTwo message={selectedValues}/>
      </div>
    </div>
  );
};

export default Final;