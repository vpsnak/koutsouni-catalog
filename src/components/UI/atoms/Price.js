import {Box, Text} from '@chakra-ui/react'
import React from 'react'

const Price = props => {
	return <Box>
		<Text ml={'4px'}>{props.price.toFixed(2)}€</Text>
	</Box>
}

export default Price