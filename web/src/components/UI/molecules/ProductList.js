import React, {useState} from 'react'
import {ProductCard} from '../molecules'
import {HStack, Text, VStack} from '@chakra-ui/react'

const ProductList = ({title, products}) => {
    let num = 0;


    return <React.Fragment>
        <VStack id={title}>
            <Text p={'12px 0'}
                  borderBottom={'1px solid black'}
                  fontSize={'16px'}
                  lineHeight={'19px'}
                  fontWeight={'700'}
                  w={"100%"}>{title}</Text>
            {products && products.map(product => {
                num++;
                if (num > 1){
                    return <ProductCard line={true} key={product._id} product={product}/>
                }else{
                    return <ProductCard line={false} key={product._id} product={product}/>
                }
            })}
        </VStack>
    </React.Fragment>
}

export default ProductList