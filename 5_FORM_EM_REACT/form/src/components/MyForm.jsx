import { useState } from "react";
import PropTypes from "prop-types";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - controlled inputs

  // 3 - gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault para o page reload de um formulário padrão.
    console.log("Enviando o formulário!");
    console.log(name, email);
  };

  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

// declaração de proptypes

MyForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyForm;
