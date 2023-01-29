import Image from 'gatsby-plugin-sanity-image'
import React from 'react'
import {Flex} from '@chakra-ui/react'

const SanityImage = ({image, width, height, ...props}) => {
  return <React.Fragment>
    {image && <Flex itemID={'center'} justifyContent={'center'} height={height} {...props}>
      <Image
        {...image}
        width={width}
        height={height}
        htmlWidth={width}
        htmlHeight={height}
      />
    </Flex>}
  </React.Fragment>
}

export default SanityImage
