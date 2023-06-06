
import ProductCard from '../../common/ProductCard';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((elemento) => {
        return (
          <ProductCard key={elemento.id} elemento={elemento} />
        );
      })}
    </div>
  );
};

export default ItemList;
