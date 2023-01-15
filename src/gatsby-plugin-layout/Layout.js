import {Box, Container} from '@chakra-ui/react'
import React from 'react'
import {PageContextProvider} from '../context/PageContext'
import Header from './Header'

const Layout = ({pageContext, location, children}) => {
	return <PageContextProvider value={{location, pageContext}}>
		<Box bg={'#f7f7f7'} py={10}>
			<Container>
				<Header/>
				{children}
			</Container>
		</Box>
	</PageContextProvider>
}

export default Layout
