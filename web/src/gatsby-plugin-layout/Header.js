import {VStack, Box, Link, HStack, Text, Flex} from '@chakra-ui/react'
import React from 'react'
import {useSettings} from '../hooks'
import {Logo} from '../components/UI/atoms'
import {SanityImage} from '../gatsby-source-sanity'

const Header = () => {
	const { title, banner, email, phone, address } = useSettings()
	return <VStack bg={'white'}
					borderTopLeftRadius={8}
					borderTopRightRadius={8}
					borderBottomLeftRadius={8}
					borderBottomRightRadius={8}
					mb={'24px'}
					alignItems={'flex-start'}
					w={"100%"}>
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
		<HStack flexDirection={'row'}
						p={'16px'}
						pt={'10px'}
						w={'100%'}>
			<Flex alignItems={'center'} justifyContent={'center'} boxSize={'80px'} rounded={'full'} border={'1px solid'} p={'2'}>
				<Logo width={50}/>
			</Flex>
			<VStack alignItems={'flex-start'}
							pl={'10px'}>
				{title && <Text fontSize={24}
							fontWeight={700}
							lineHeight={'34px'}>{title}</Text>}
				<HStack>
					<Text as={Link} href={`mailto:${email}`} color={'#9b9b9b'}
								fontSize={'12px'}
								fontWeight={700}
								lineHeight={'17px'}>{email}</Text>
					<Text as={Link} href={`tel:${phone}`} color={'#9b9b9b'}
								fontSize={'12px'}
								fontWeight={400}
								lineHeight={'17px'}>
						{phone}
					</Text>
					<Text color={'#9b9b9b'}
								fontSize={'12px'}
								fontWeight={400}
								lineHeight={'17px'}>
						{address}
					</Text>
				</HStack>
			</VStack>
		</HStack>
	</VStack>
}

export default Header
