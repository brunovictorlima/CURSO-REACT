import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Este exemplo acima mostra que o css de componente vaza para elementos de escopo global */}
    </>
  );
}

export default App;
