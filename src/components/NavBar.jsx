import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Select,
  Image
} from '@chakra-ui/react';
import CartWidget from './cart/CartWidget';

const NavBar = () => {
  return (
    <>
    <Flex minWidth="max-content" alignItems="center" gap="1">
      <Box>
        <Heading size="md">Tienda de Vinos</Heading>
      </Box>
      <Spacer />
  
    <Select variant='filled' placeholder='Eliga el color'>
      <option value='option1'>Tinto</option>
      <option value='option2'>Blanco</option>
      <option value='option3'>Rosado</option>
    </Select>

    <CartWidget />

        
    </Flex>
    <Image boxSize='300px'
    objectFit='cover'
    src='https://res.cloudinary.com/da5x6tuuw/image/upload/v1684969081/una-botella-de-vino-tinto_l7snoz.jpg' />
    </>
  );
};

export default NavBar;
