import PropTypes from "prop-types";

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
        {idade >= 18 ? (
          <li>Pode tirar habilitação!</li>
        ) : (
          <li>Não tem idade para dirigir!</li>
        )}
      </ul>
    </div>
  );
};

UserDetails.propTypes = {
  nome: PropTypes.string,
  idade: PropTypes.number,
  profissao: PropTypes.string,
};

export default UserDetails;
