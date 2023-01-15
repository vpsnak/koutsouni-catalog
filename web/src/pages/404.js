import React from 'react'

const NotFoundPage = () => {
	return <p>
		Sorry 😔, we couldn’t find what you were looking for.
		<br/>
		{process.env.NODE_ENV === 'development' ? (
			<>
				<br/>
				Try creating a page in <code>src/pages/</code>.
				<br/>
			</>
		) : null}
		<br/>
	</p>
}

export default NotFoundPage