import { Card } from './Card.jsx';
import { Data } from './cardData.js';

export const Home = () => {
  return (
    <>
        {Data.map((el, index) => (
            <Card key={index} title={el.title} description={el.description}/>
        ))};
    </>
  )
}
