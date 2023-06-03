import { Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h3>{elemento.title}</h3>
            <Image boxSize='300px'
            src={elemento.img} />
            <h4>{elemento.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
