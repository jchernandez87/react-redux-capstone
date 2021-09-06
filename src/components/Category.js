import './Category.css';
import { NavLink } from 'react-router-dom';
import Card from './CategoryCard';

const Category = () => {
  const cardsInfo = [
    {
      id: 1,
      city: 'Argentina',
      number: 1800,
      path: '/cities',
    },
    {
      id: 2,
      city: 'Colombia',
      number: 1800,
      path: '/cities',
    },
    {
      id: 3,
      city: 'Chile',
      number: 1800,
      path: '/cities',
    },
    {
      id: 4,
      city: 'Ecuador',
      number: 1800,
      path: '/cities',
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <h2>America Latina</h2>
        <span>465456 views</span>
      </div>
      <div className="cardsContainer">
        {cardsInfo.map((el) => (
          <NavLink key={el.id} to={el.path}>
            <Card key={el.id} id={el.id} city={el.city} number={el.number} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
