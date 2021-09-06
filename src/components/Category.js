import './Category.css';
import Card from './CategoryCard';

const Category = () => {
  const cardsInfo = [
    {
      id: 1,
      city: 'Argentina',
      number: 1800,
    },
    {
      id: 2,
      city: 'Colombia',
      number: 1800,
    },
    {
      id: 3,
      city: 'Chile',
      number: 1800,
    },
    {
      id: 4,
      city: 'Ecuador',
      number: 1800,
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
          <Card key={el.id} id={el.id} city={el.city} number={el.number} />
        ))}
      </div>
    </div>
  );
};

export default Category;
