import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { products } from '../../productsMock'

const ProductDetailContainer = () => {
    const [ProductSelected, setProductSelected] = useState({})

    useEffect(() =>{
    
        let id = 2

        useEffect(()=>{

            let productFind = products.find((product)=> product.id === id)

            const getProduct = new Promise((res, rej)=>{
                res(productFind)
            })
        })

        getProduct
            .then((res)=> setProductSelected(res))
            .catch((err)=> console.log(err));

    }, [id]);

    console.log()

  return (
    <ProductDetail ProductSelected={ProductSelected} />
  )
}

export default ProductDetailContainer