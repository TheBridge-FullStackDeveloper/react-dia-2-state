import { useEffect } from "react";

const ExampleChildFunctional = () => {
  //componentWillUnmount()
  useEffect(() => {
    return () => {
      console.log("El componente ExampleChild ha sido eliminado(desmontado).");
    };
  });
  return <h1>Hola The Bridge! "componente hijo"</h1>;
};

export default ExampleChildFunctional;
