import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";

import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim"; //podemos passar por props, um valor, uma variável, um state, etc.
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 43543 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  const users = [
    { nome: "Bruno", idade: 30, profissao: "desenvolvedor", id: 1 },
    { nome: "Bill", idade: 50, profissao: "cabeleireiro", id: 2 },
    { nome: "Ligia", idade: 49, profissao: "cake designer", id: 3 },
    { nome: "João", idade: 10, profissao: "não tem", id: 4 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando (duplicar linha inteira: shift + alt + down) */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* Em uma props, valores numéricos devem ser passados entre chaves */}
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          key={car.id}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="teste">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="teste2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função como prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <h2>Dados dos usuários</h2>
      {users.map((user) => (
        <UserDetails
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
          key={user.id}
        />
      ))}
    </>
  );
}

export default App;
