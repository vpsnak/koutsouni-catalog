import {graphql, useStaticQuery} from 'gatsby'
import greekUtils from 'greek-utils'
import {useCallback} from 'react'

const useProductSearch = query => {
  const {allSanityProduct} = useStaticQuery(
    graphql`
      query {
        allSanityProduct(
          filter: {brand: {in: ["Baby Dutch", "Baby Cloud", "Nature Zoo"]}, status: {eq: true}}
        ) {
          nodes {
            _id
            sku
            title
            brand
            display_price
            display_b2b_price
            b2b {
              price
            }
            inventory{
              quantity
              stock_status
            }
            variants{
              sku
              color
              size
              b2b {
                price
              }
              inventory{
                quantity
                stock_status
              }
            }
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
      }
    `)

  const normalizedQuery = greekUtils.sanitizeDiacritics(query)
  .toLowerCase()
  return useCallback(allSanityProduct.nodes.filter(product => {
    const fieldsToSearch = greekUtils.sanitizeDiacritics([
      product.title,
      product.brand
    ].join(' '))
    .toLowerCase()
    if (fieldsToSearch.includes(normalizedQuery)) {
      return true
    }
    if (greekUtils.toGreeklish(fieldsToSearch)
    .includes(greekUtils.toGreeklish(normalizedQuery))) {
      return true
    }
  }), [normalizedQuery])
}

export default useProductSearch