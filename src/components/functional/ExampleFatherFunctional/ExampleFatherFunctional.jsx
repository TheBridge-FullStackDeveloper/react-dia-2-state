import { useState } from "react";
import ExampleChildFunctional from "../ExampleChildFunctional/ExampleChildFunctional";

const ExampleFatherFunctional = () => {
  const [show, setShow] = useState(true);

  const handleRemove = () => setShow(false);

  return (
    <div>
      {show ? <ExampleChildFunctional /> : null}
      <button onClick={handleRemove}>Eliminar el componete ExampleChild "componente Padre"</button>
    </div>
  );
};
export default ExampleFatherFunctional;
