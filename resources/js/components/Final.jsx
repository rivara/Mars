import { useState } from "react";
import Part1 from "./Action1";
import Part2  from "./Action2";
const Final = () => {
  const [selectedValues, setSelectedValues] = useState([])
  // Función para manejar cambios en los valores seleccionados
  const handleChildValueChange = (newSelectedValues) => {
    setSelectedValues(newSelectedValues);
  };
  return (
      <div class="container">
          <div class="row">
            <div class="col-md-4 offset-md-8 mb-4">
                <Part1 onSelectedValuesChange={handleChildValueChange} />
            </div>

            <div class="col-md-12 mt-3">
                <Part2 id={selectedValues}/>
            </div>
          </div>
      </div>
  );
};
export default Final;
