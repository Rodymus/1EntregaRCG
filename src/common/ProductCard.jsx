import { Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import React from 'react'

const ProductCard = ({elemento}) => {
  return (
    <div>
      <h3>{elemento.title}</h3>
      <Image boxSize='300px'
      src={elemento.img} />
      <h4>$ {elemento.price}</h4>
    </div>
  )
}

export default ProductCard