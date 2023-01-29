import {Box, Button, Flex, HStack, Link, Text, VStack} from '@chakra-ui/react'
import React from 'react'
import {useSettings} from '../hooks'
import {Logo} from '../components/UI/atoms'
import {SanityImage} from '../gatsby-source-sanity'

const Header = () => {
  const {title, banner, email, phone, address} = useSettings()
  return <VStack bg={'white'}
                 borderTopLeftRadius={8}
                 borderTopRightRadius={8}
                 borderBottomLeftRadius={8}
                 borderBottomRightRadius={8}
                 mb={'24px'}
                 alignItems={'flex-start'}
                 w={'100%'}>
    <Box>
      <SanityImage image={banner}
                   width={915}
                   height={350}
                   borderTopLeftRadius={8}
                   borderTopRightRadius={8}
                   borderBottomLeftRadius={4}
                   borderBottomRightRadius={4}
      />
    </Box>
    <HStack flexDirection={'row'} p={'lg'} m={0} w={'100%'}>
      <Flex alignItems={'center'} justifyContent={'center'} boxSize={'80px'} rounded={'full'} border={'1px solid'}>
        <Logo width={50}/>
      </Flex>
      <VStack alignItems={'flex-start'}
              pl={'lg'}>
        {title && <Text fontSize={24}
                        fontWeight={700}
                        lineHeight={'34px'}>{title}</Text>}
        <HStack>
          <Text as={Link} href={`mailto:${email}`} color={'play-down'} fontSize={'sm'}
                lineHeight={'17px'}>{email}</Text>
          <Text color={'play-down'}
                fontSize={'sm'}
                lineHeight={'17px'}>
            {address}
          </Text>
        </HStack>
      </VStack>
      <Box flex={1}/>
      <Button as={Link} href={`tel:${phone}`} variant={'outline'} rounded={'full'} colorScheme={'teal'}>{phone}</Button>
    </HStack>
  </VStack>
}

export default Header
