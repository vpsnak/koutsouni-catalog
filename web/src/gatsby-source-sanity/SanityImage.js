import Image from 'gatsby-plugin-sanity-image'
import React from 'react'
import {Box} from '@chakra-ui/react'

const SanityImage = ({image, width, height, ...props}) => {
  return <React.Fragment>
    {image && <Box width={width}>
      <Image
        {...image}
        width={width}
        height={height}
        {...props}
      />
    </Box>}
  </React.Fragment>
}

export default SanityImage
