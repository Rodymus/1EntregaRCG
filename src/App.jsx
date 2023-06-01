import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
  <>
  <ChakraProvider> 
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a la tienda de Vinos!!!"} />
  </ChakraProvider>
  </>
  );
};

export default App;
