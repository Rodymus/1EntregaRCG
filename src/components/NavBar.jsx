import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup } from '@chakra-ui/react';

const NavBar = () => {
  return ( <div>
    <h1>Tienda de Vinos</h1>
    <ul>
      <Button colorScheme='blue'>Tinto</Button>
      <Button colorScheme='blue'>Blanco</Button>
      <Button colorScheme='blue'>Rosado</Button>
    </ul>
      <CartWidget />
      
  </div>
  );
};

export default NavBar;