const Events = () => {
  // e = event (são todas as informações que o evento possui)
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
        {/* Não declara-se () depois da função em um evento
            para não dispará-lo ao navegador ler o código */}
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também!
        </button>
        {/* <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor.
        </button> */}

        {/* Não recomenda-se declarar uma função dentro de um evento no html
            com mais de 1 linha. Até funciona, mas dá erro no editor de código,
            além de sujar o código html. */}
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
