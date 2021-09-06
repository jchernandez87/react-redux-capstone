import PropTypes from 'prop-types';

const Card = ({ id, city, number }) => (
  <div className="card" id={id}>
    <button type="button" className="cardBtn">
      arrow
    </button>
    <div className="info">
      <h4 className="name">{city}</h4>
      <span className="number">{number}</span>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Card;
