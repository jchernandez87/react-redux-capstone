import PropTypes from 'prop-types';

const Card = ({ id, city, activeCases }) => (
  <div className="card" id={id}>
    <div className="info">
      <h4 className="name">{city}</h4>
      <span className="number">{`Active Cases: ${activeCases}`}</span>
      <button type="button" className="cardBtn">
        arrow
      </button>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  activeCases: PropTypes.number.isRequired,
};

export default Card;
