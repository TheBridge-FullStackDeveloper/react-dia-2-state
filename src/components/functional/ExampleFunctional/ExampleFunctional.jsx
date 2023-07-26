import { useState, useEffect } from "react";

const ExampleFunctional = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  //componentDidMount()
  useEffect(() => {
    console.log("componente montado");
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);
  }, []);

  //componentDidUpdate()
  useEffect(() => {
    console.log("componente actualizado");
  });
  return <h1>My Favorite Color is {favoriteColor}</h1>;
};

export default ExampleFunctional;
