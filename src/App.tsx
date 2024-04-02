import "./App.css";
import ComponenteCorreto from "./ComponenteCorreto";
import ComponenteErrado from "./ComponenteErrado";

function App() {
  return (
    <>
      <div>
        <h2>useMemo</h2>
        <h3>Caso Errado:</h3>
        <ComponenteErrado />

        <h3>Caso Correto:</h3>
        <ComponenteCorreto />
      </div>
    </>
  );
}

export default App;
