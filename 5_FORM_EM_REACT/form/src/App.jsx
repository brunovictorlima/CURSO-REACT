import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Bruno",
          email: "bruno@gmail.com",
          bio: "olá mundão",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
