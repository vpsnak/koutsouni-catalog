import React from 'react'
import {SanityImage} from '../../../gatsby-source-sanity'
import {useSettings} from '../../../hooks'

const Logo = props => {
  const {logo} = useSettings()
  return <SanityImage
    image={logo}
    {...props}
  />
}

export default Logo
