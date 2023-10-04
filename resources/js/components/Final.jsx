import { useState } from "react";
import ChildOne from "./Action2";
import ChildTwo  from "./Frame2";
import MultiSelectDropdown from "./Action";




const Final = () => {
  const data = "Hola desde el padre"



  const [childValue, setChildValue] = useState("");

  // Función que se pasará como prop al componente hijo
  const handleChildValueChange = (value) => {
    setChildValue(value);
  };

  return (
    <div className="parent">
      <div className="children-container">
       
        <ChildOne onSelectedValuesChange={handleChildValueChange} />
        <ChildTwo message={childValue}/>
      </div>
    </div>
  );
};

export default Final;