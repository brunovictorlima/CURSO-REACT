// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, setColor } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      <button onClick={() => setColor("blue")}>Set Blue</button>
      <button onClick={() => setColor("red")}>Set Red</button>
    </div>
  );
};

export default Home;
