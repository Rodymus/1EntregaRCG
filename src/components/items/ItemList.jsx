
const ItemList = ({ items }) => {
  
  
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  )

  
};

export default ItemList;