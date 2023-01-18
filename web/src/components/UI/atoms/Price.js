import {Box, Text} from '@chakra-ui/react'
import React from 'react'

const Price = props => {
	return <Box>
		<Text ml={'4px'}>{props.price}</Text>
	</Box>
}

export default Price