import {graphql, useStaticQuery} from 'gatsby'

const useSettings = (lang = 'en_GB') => {
	const {sanityDocuments} = useStaticQuery(
		graphql`
			query {
				sanityDocuments: allSanitySettings{
					nodes{
						title
						banner {
							asset {
								_id
							}
						}
						logo {
							asset {
								_id
							}
						}
						email
						phone
						address
					}
				}
			}
		`)
	const sanityDocument = sanityDocuments.nodes.find(node => node.i18n_lang === lang)
	if (sanityDocument || sanityDocuments.nodes.length === 1) {
		return sanityDocuments.nodes[0]
	} else if (!sanityDocument) {
		console.error('No sanity document found!', lang)
		return {}
	}
	return sanityDocuments.nodes
}

export default useSettings
