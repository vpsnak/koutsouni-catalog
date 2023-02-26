import React from 'react'
import {ProductCard} from '../molecules'
import {Text, VStack} from '@chakra-ui/react'

const ProductList = ({title, products}) => {

  return <VStack id={title} spacing={0}>
    <Text p={'12px 0'}
          borderBottom={'1px solid black'}
          fontSize={'16px'}
          lineHeight={'19px'}
          fontWeight={'700'}
          w={'100%'}
          dangerouslySetInnerHTML={{ __html: title}}/>
    {products && products.map(product => <ProductCard key={product._id} product={product}/>)}
  </VStack>
}

export default ProductList