import {Box, Button, HStack, Image, Text, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import {ModuleSerializer} from '../../modules'
import {Price} from '../atoms'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {SanityImage} from '../../../gatsby-source-sanity'

const ProductCard = ({product, line}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return <HStack p={'24px 0'}
                   borderTop={line && 'solid 1px #8080804d'}
                   width={'100%'}
                   justify={"space-between"}
                   cursor={"pointer"}
                   onClick={onOpen}>
        <Box w={480}>
            <Text fontSize={'14px'}
                  fontWeight={'700'}
                  lineHeight={'20px'}
                  color={'#333333'}
                  mb={'8px'}>{product.title}</Text>
            <Text fontSize={'12px'}
                  fontWeight={'400'}
                  lineHeight={'17px'}
                  color={'#9b9b9b'}
                  mb={'8px'}>
                <ModuleSerializer blocks={product._rawDescription}/>
            </Text>
            {product.display_price && <Box display="flex"
                 direction="row"
                 fontSize={'14px'}
                 fontWeight={'400'}
                 lineHeight={'20px'}
                 color={'#333333'}>B2C: <Price price={product.display_price}/></Box>}
            {product.display_b2b_price && <Box display="flex"
                 direction="row"
                 fontSize={'14px'}
                 fontWeight={'400'}
                 lineHeight={'20px'}
                 color={'#333333'}>B2B: <Price price={product.display_b2b_price}/></Box>}
        </Box>
        <SanityImage boxSize={'112px'}
                     width={105}
               maxH={'98px'}
               objectFit={'cover'}
               borderRadius={'6px'}
               image={product.image}></SanityImage>
        <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
            <ModalOverlay/>
            <ModalContent borderRadius={"9px"}>
                <ModalHeader p={"0px"}>
                    {product.image && <SanityImage height={250}
                           borderRadius={'8px'}
                           borderBottomLeftRadius={"0px"}
                           borderBottomRightRadius={"0px"}
                           image={product.image}></SanityImage>}
                </ModalHeader>
                <ModalCloseButton borderRadius={"50%"} bg={"white"} size={"35px"} color boxSize={"30px"}/>
                <ModalBody>
                    <Text fontSize={'14px'}
                          fontWeight={'700'}
                          lineHeight={'20px'}
                          color={'#333333'}
                          mb={'8px'}>{product.title}</Text>
                    <Text fontSize={'12px'}
                          fontWeight={'400'}
                          lineHeight={'17px'}
                          color={'#9b9b9b'}
                          mb={'8px'}>
                        <ModuleSerializer blocks={product._rawDescription}/>
                    </Text>
                    {!!product.variants?.length && product.variants.map(variant => {
                        return <div>
                            <div>{variant.sku}</div>
                            <div>{variant.color}</div>
                            <div>{variant.size}</div>
                            <div>{variant.inventory.quantity}</div>
                            <div>{variant.inventory.stock_status}</div>
                        </div>
                    })}
                    {!product.variants?.length && <div>
                        <div>{product.sku}</div>
                        <div>{product.inventory.quantity}</div>
                        <div>{product.inventory.stock_status}</div>
                    </div>}
                </ModalBody>
            </ModalContent>
        </Modal>
    </HStack>
}

export default ProductCard