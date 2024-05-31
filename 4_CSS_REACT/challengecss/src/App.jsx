import CarDetails from "./components/CarDetails";
import "./App.css";

function App() {
  const cars = [
    { id: 1, brand: "ford", model: "ka", color: "red" },
    { id: 2, brand: "VW", model: "voyage", color: "white" },
    { id: 3, brand: "chevrolet", model: "onix", color: "silver" },
    { id: 4, brand: "BMW", model: "X5", color: "blue" },
  ];

  return (
    <>
      <h1>Catálogo de carros</h1>
      {cars.slice(0, 3).map((car) => (
        <CarDetails
          brand={car.brand}
          model={car.model}
          color={car.color}
          key={car.id}
        />
      ))}
    </>
  );
}

export default App;
