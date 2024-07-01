import "./Game.css";

// eslint-disable-next-line react/prop-types
const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  );
};

export default Game;
