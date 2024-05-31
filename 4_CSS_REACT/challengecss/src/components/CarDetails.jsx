import PropTypes from "prop-types";
import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, model, color }) => {
  return (
    <div className={styles.CarDetails}>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

CarDetails.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  color: PropTypes.string,
};

export default CarDetails;
