import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import {ModuleSerializer} from '../../modules'
import {Price, Title} from '../atoms'
import {SanityImage} from '../../../gatsby-source-sanity'

const ProductCard = ({product}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return <HStack p={'24px 0'}
                 borderTop={'solid 1px #8080804d'}
                 _first={{borderTop: 'none'}}
                 width={'100%'}
                 justify={'space-between'}
                 cursor={'pointer'}
                 onClick={onOpen}>
    <Box w={480}>
      <Text fontSize={'14px'}
            fontWeight={'700'}
            lineHeight={'20px'}
            mb={'4px'}>{product.title}</Text>
      <Text mb={'8px'}>Κωδ. {product.sku}</Text>
      <Text fontSize={'12px'}
            fontWeight={'400'}
            lineHeight={'17px'}
            color={'play-down'}
            mb={'8px'}>
        <ModuleSerializer blocks={product._rawDescription}/>
      </Text>
      {!!product.variants?.length &&
        <Text fontSize={'sm'} color={'play-down'}>Μεγέθη: {product.variants.map(variant => variant.size)
        .join(' / ')}</Text>}
      {product.display_b2b_price && <Price mt={'md'}>{product.display_b2b_price}</Price>}
    </Box>
    <Box boxSize={'112px'}
         borderRadius={'6px'}
         overflow={'hidden'}
         filter={'invert(0.02) saturate(1.3)'}>
      <SanityImage bg={'white'} image={product.image} height={112} width={112}></SanityImage>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} isCentered>
      <ModalOverlay/>
      <ModalContent borderRadius={'9px'} overflowX={'auto'} maxH={'80vh'}>
        <ModalHeader p={'0px'}>
          {product.image && <SanityImage w={'full'} height={400}
                                         bg={'white'}
                                         filter={'invert(0.02) saturate(1.3)'}
                                         image={product.image}></SanityImage>}
        </ModalHeader>
        <ModalCloseButton borderRadius={'50%'} bg={'white'} size={'35px'} boxSize={'30px'}/>
        <ModalBody p={0} bg={'background'}>
          <Box shadow={'sm'} p={'lg'} bg={'white'}>
            <Title fontSize={'lg'} mb={'md'}>{product.title}</Title>
            <Text fontSize={'sm'} color={'play-down'}>{[
              `Τιμή λιανικής ${product.display_price}`,
              `${product?.b2b?.quantity > 0 ? `Ελάχιστη Ποσότητα Παραγγελίας ${product.b2b.quantity}τχμ` : ''}`
            ].filter(Boolean)
            .join(' - ')}</Text>
            <Price fontWeight={'bold'} fontSize={'lg'} mt={'lg'}>{product.display_b2b_price}</Price>
          </Box>
          <Box shadow={'md'} p={'lg'}>
            <Text fontSize={'12px'}
                  fontWeight={'400'}
                  lineHeight={'17px'}
                  color={'play-down'}
                  mb={'8px'}>
              <ModuleSerializer blocks={product._rawDescription}/>
            </Text>
            {!!product.variants?.length && <Stack>
              <Text fontWeight={'bold'}>Μεγέθη:</Text>
              <SimpleGrid columns={2} gap={'md'}>{product.variants.map(variant => <div>{variant.size} -
                Κωδ. {variant.sku}</div>)}</SimpleGrid>
            </Stack>}
            {!product.variants?.length && <div>Κωδ. {product.sku}</div>}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </HStack>
}

export default ProductCard