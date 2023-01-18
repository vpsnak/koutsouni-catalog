import React, {useState} from 'react'
import {graphql} from 'gatsby'
import {GridItem, SimpleGrid, Box, Text} from '@chakra-ui/react'
import {SearchInput} from '../components/UI/atoms'
import {CategoryList, ProductList} from '../components/UI/molecules'
import StickyBox from "react-sticky-box";
import ScrollSpy from "react-ui-scrollspy";
import "./style.css";
import {NotFound} from "../components/UI/atoms/NotFound";
import {useCategories,useProductSearch} from '../hooks'
const IndexPage = ({data}) => {
    const [query, setQuery] = useState('')
    const products = useProductSearch(query)
    const categories = useCategories(products)

    return <React.Fragment>
        <SimpleGrid columns={3} gap={3}>
            <Box>
                <StickyBox>
                    <CategoryList categories={categories}/>
                </StickyBox>
            </Box>
            <GridItem colSpan={2}
                      bg={"white"}
                      p={"16px 24px"}
                      borderRadius={"8px"}>
                <SearchInput onChange={query => setQuery(query)}/>
                <ScrollSpy>
                    {categories && categories.map(category =>
                        <ProductList key={category.title}
                                     title={category.title}
                                     products={products.filter(product => product.category.map(category => category.title).includes(category.title))}/>
                    )}
                </ScrollSpy>
                {!products.length && <NotFound/>}
            </GridItem>
        </SimpleGrid>
    </React.Fragment>
}

export default IndexPage

export const query = graphql`{
    allSanityCategory {
      nodes {
        title
      }
    }
}
`