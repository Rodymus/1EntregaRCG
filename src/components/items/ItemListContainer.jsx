import ItemList from "./ItemList";
import { useEffect, useState} from "react"
import { products } from "../../productsMock";

const ItemListContainer = ({greeting}) => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
      // reject( "la promesa salio mal ")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

    
  }, []);
  
  
  return (
  <ItemList items={items}/>
  //  <div>{greeting}</div>;
  )
  
};

export default ItemListContainer ;