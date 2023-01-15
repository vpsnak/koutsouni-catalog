import React, {useState} from 'react'
import {graphql} from 'gatsby'
import {GridItem, SimpleGrid, Box, Text} from '@chakra-ui/react'
import {SearchInput} from '../components/UI/atoms'
import {CategoryList, ProductList} from '../components/UI/molecules'
import StickyBox from "react-sticky-box";
import ScrollSpy from "react-ui-scrollspy";
import "./style.css";
import {NotFound} from "../components/UI/atoms/NotFound";
import 'greek-utils';
const IndexPage = ({data}) => {
    const {allSanityProduct, allSanityCategory} = data
    const [products, setProducts] = useState(allSanityProduct.nodes)
    const [categories, setCategories] = useState(allSanityCategory.nodes)
    const [productFound, setProductFound] = useState(false)
    const greekUtils = require('greek-utils');
    const handleSearch = term => {
        if (term.length) {
            const searchInputFilteredProducts = allSanityProduct.nodes.filter(prod => {
                if (greekUtils.sanitizeDiacritics(prod.title.toLowerCase()).includes(greekUtils.sanitizeDiacritics(term.toLowerCase())) ||
                    greekUtils.sanitizeDiacritics(prod.title.toLowerCase()).includes(greekUtils.toGreek(term.toLowerCase()))){
                    return true;
                }
            })
            const productCategories = searchInputFilteredProducts.flatMap(product => product.category.map(category => category.title))
            const filteredCategories = allSanityCategory.nodes.filter(category => productCategories.includes(category.title))
            setProducts(searchInputFilteredProducts)
            setCategories(filteredCategories)
            setProductFound(searchInputFilteredProducts.length ? false : true)
        } else {
            setProducts(allSanityProduct.nodes)
            setCategories(allSanityCategory.nodes)
        }
    }

    return <React.Fragment>
        <SimpleGrid columns={3}>
            <Box display={"flex"}
                 alignItems={"flex-start"}>
                <StickyBox>
                    <CategoryList categories={categories}/>
                </StickyBox>
            </Box>
            <GridItem colSpan={2}
                      bg={"white"}
                      p={"16px 24px"}
                      borderRadius={"8px"}>
                <SearchInput onChange={handleSearch}/>
                <ScrollSpy>
                    {categories && categories.map(category =>
                        <ProductList key={category.title}
                                     title={category.title}
                                     products={products.filter(product => product.category.map(category => category.title).includes(category.title))}/>
                    )}
                </ScrollSpy>
                {productFound &&
                    <NotFound/>}
            </GridItem>
        </SimpleGrid>
    </React.Fragment>
}

export default IndexPage

export const query = graphql`{
  allSanityProduct(filter: {stock_status: {ne: "outofstock"}}) {
    nodes {
      _id
      title
      price
      b2b_price
      category {
        title
      }
      _rawDescription
      image {
        asset {
          _id
          url
        }
      }
    }
  }
  allSanityCategory {
    nodes {
      title
    }
  }
}
`