import {PortableText} from '@portabletext/react'
import React from 'react'

const serializers = {
	types: {},
	block: {
		normal: ({children}) => <p>{children}</p>
	},
	marks: {}
}

const ModuleSerializer = ({blocks, ...props}) => <PortableText
	value={blocks}
	components={serializers}
	onMissingComponent={(message, options) => {
		console.warn(message, {
			type: options.type,
			nodeType: options.nodeType
		})
	}}
/>

export default ModuleSerializer
