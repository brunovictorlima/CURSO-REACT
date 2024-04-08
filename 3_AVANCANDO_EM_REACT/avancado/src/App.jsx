import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";

import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

function App() {
  // const name = "Joaquim"; //podemos passar por props, um valor, uma variável, um state, etc.
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 43543 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

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
    </>
  );
}

export default App;
