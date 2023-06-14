import { useEffect, useState } from 'react';
import { getProductById } from '../../productsMock'

const ItemDetailContainer = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProductById('1')
      .them((Response) => {
        setItems(Response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ItemDetail {...items} />
    </div>
  );
};

export default ItemDetailContainer;
