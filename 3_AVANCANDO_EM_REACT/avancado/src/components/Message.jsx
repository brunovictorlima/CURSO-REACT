import PropTypes from "prop-types";

const Message = ({ msg }) => {
  return <div>A mensagem é: {msg}</div>;
};

Message.propTypes = {
  msg: PropTypes.string,
};

export default Message;
