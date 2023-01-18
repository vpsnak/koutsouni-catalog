const resolvers = require('./src/gatsby-node/resolvers/resolvers')
const pages = require('./src/gatsby-node/pages/pages')

exports.createPages = async ({graphql, actions}) => {
	await pages({graphql, actions})
}

exports.createResolvers = ({createResolvers}) => {
	createResolvers(resolvers)
}

