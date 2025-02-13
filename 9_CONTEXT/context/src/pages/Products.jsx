import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 4 - consumindo contexto sem hook personalizado, usando useContext e CounterContext (mais linhas de código).

const Products = () => {
  const { counter } = useContext(CounterContext);
  return <div><h1>Products</h1>
      <p>Valor do contador: {counter}</p></div>;
};

export default Products;
