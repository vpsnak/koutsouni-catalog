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
            <Box display="flex"
                 direction="row"
                 fontSize={'14px'}
                 fontWeight={'400'}
                 lineHeight={'20px'}
                 color={'#333333'}>Απο <Price price={product.price}/></Box>
            {product.b2b_price > 0 && <Box display="flex"
                 direction="row"
                 fontSize={'14px'}
                 fontWeight={'400'}
                 lineHeight={'20px'}
                 color={'#333333'}>B2B: <Price price={product.b2b_price}/></Box>}
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
                    {product.image && <Image boxSize={'700px'}
                           maxH={'400px'}
                           objectFit={'cover'}
                           borderRadius={'8px'}
                           borderBottomLeftRadius={"0px"}
                           borderBottomRightRadius={"0px"}
                           src={product.image.asset.url}></Image>}
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
                </ModalBody>
            </ModalContent>
        </Modal>
    </HStack>
}

export default ProductCard