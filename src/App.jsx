import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ProductDetail from './components/ProductDetail/ProductDetail';


const App = () => {
  return (
  <>
  <ChakraProvider> 
   {/* <NavBar />*/}
  <ItemListContainer greeting={"Bienvenidos a la tienda de Vinos!!!"} />
  {/*<ProductDetail />*/}
  </ChakraProvider>
  </>
  );
};

export default App;
