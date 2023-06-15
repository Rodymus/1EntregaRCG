import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ItemDetailConainer from './components/items/ItemDetailContainer';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    greeting={'Bienvenidos a la tienda de Vinos!!!'}
                  />
                }
              />
              <Route path="/item/:id" element={<ItemDetailConainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ItemListContainer />
      </ChakraProvider>
    </>
  );
};

export default App;
