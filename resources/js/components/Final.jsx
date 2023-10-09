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
      <div class="container">
          <div class="row">
            <div class="col-md-4 offset-md-8">
                <ChildOne onSelectedValuesChange={handleChildValueChange} />
            </div>
            <div class="col-md-12 offset-md-12"> 
                <ChildTwo id={selectedValues}/>
            </div>       
          </div>
      </div>
  );
};
export default Final;