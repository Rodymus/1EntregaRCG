
const ItemList = ({ items }) => {
  console.log(items)

  return (
    <div>
      <div>
        <h2>{items[0].title}</h2>
        <img src={items[0].img} />
        <h3>{items[0].price}</h3>
      </div>
    </div>
  );
};

export default ItemList;
