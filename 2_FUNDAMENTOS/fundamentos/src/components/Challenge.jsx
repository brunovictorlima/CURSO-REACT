const Challenge = () => {
  let a = 1;
  let b = 2;

  const handleSum = () => {
    return console.log(a + b);
  };

  return (
    <div>
      {`Valor 1: ${a}`}
      <br></br>
      {`Valor 2: ${b}`}
      <br></br>
      <button onClick={handleSum}>Somar valores</button>
    </div>
  );
};

export default Challenge;
