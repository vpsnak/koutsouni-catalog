import Image from 'gatsby-plugin-sanity-image'
import React from 'react'
import {Box} from '@chakra-ui/react'

const SanityImage = ({image, width, height, ...props}) => {
  return <React.Fragment>
    {image && <Box as={Image}
                   {...image}
                   objectFit={'contain'}
                   maxW={'full'}
                   loading={'lazy'}
                   width={width}
                   height={height}
                   {...props}
    />}
  </React.Fragment>
}

export default SanityImage
