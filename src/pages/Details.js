import PropTypes from 'prop-types';

const Details = ({
  id,
  name,
  cases,
  deaths,
  newDeaths,
  newCases,
  intensive,
  hospitalised,
}) => (
  <div id={id}>
    <div className="itemHeader">
      <h4>{name}</h4>
      <span>{cases}</span>
      <span>Active</span>
    </div>
    <div className="citiesContainer">
      <div>
        <span>Total Deaths</span>
        <span>{deaths}</span>
      </div>
      <div>
        <span>New Deaths</span>
        <span>{newDeaths}</span>
      </div>
      <div>
        <span>New Cases</span>
        <span>{newCases}</span>
      </div>
      <div>
        <span>Intesive Care</span>
        <span>{intensive}</span>
      </div>
      <div>
        <span>Hospitalised</span>
        <span>{hospitalised}</span>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  newDeaths: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  intensive: PropTypes.number.isRequired,
  hospitalised: PropTypes.number.isRequired,
};

export default Details;
