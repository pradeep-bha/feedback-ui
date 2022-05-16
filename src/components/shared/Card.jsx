import PropTypes from "prop-types";

function Card({ children, reverse, input }) {
  return <div className={`card ${input && "input"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  input: PropTypes.bool,
};

export default Card;
