import {Box, Container, Link, Text} from '@chakra-ui/react'
import React from 'react'
import {PageContextProvider} from '../context/PageContext'
import Header from './Header'
import {GenerateCatalog} from '../components/UI/organisms'

const Layout = ({pageContext, location, children}) => {
  return <PageContextProvider value={{location, pageContext}}>
    <Box bg={'#f7f7f7'} pt={10}>
      <Container position={'relative'}>
        <Header/>
        {children}
        <Text align={'center'} fontSize={'md'} p={'lg'}>Powered by <Link href="https://spiritdigital.agency/" isExternal>Spirit Digital Agency</Link></Text>
      </Container>
      <GenerateCatalog position={'fixed'} bottom={'lg'} right={'lg'}/>
    </Box>
  </PageContextProvider>
}

export default Layout
