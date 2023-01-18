import {graphql, useStaticQuery} from 'gatsby'

const useCategories = products => {
	const {allSanityCategory} = useStaticQuery(
		graphql`
			query {
				allSanityCategory {
					nodes {
						title
						sanityParent{
							title
						}
					}
				}
			}
		`)
	const productCategories = products.flatMap(product => product.category.map(category => category.title))
	return allSanityCategory.nodes.filter(category => productCategories.includes(category.title))
}

export default useCategories
