import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 9;
  const [name] = useState("Bruno");
  const redTitle = true;

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Este exemplo acima mostra que o css de componente vaza para elementos de escopo global */}
      {/* Inline CSS */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline.
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "n" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        Teste nome
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
