import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterFunctional from "./components/CounterFunctional/CounterFunctional";
import Example from "./components/Example/Example";
import ExampleFather from "./components/ExampleFather/ExampleFather";
import ExampleFatherFunctional from "./components/functional/ExampleFatherFunctional/ExampleFatherFunctional";
import ExampleFunctional from "./components/functional/ExampleFunctional/ExampleFunctional";

function App() {
  return (
    <div>
      {/* <Counter initialValue={0} />
      <Counter initialValue={5} />
      <CounterFunctional initialValue={3} />
      <CounterFunctional initialValue={7} /> */}
      {/* <Example /> */}
      {/* <ExampleFather/> */}
      {/* <ExampleFunctional/> */}
      <ExampleFatherFunctional/>
    </div>
  );
}

export default App;
