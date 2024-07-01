import "./GameOver.css";

// eslint-disable-next-line react/prop-types
const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Recomeçar jogo</button>
    </div>
  );
};

export default GameOver;
