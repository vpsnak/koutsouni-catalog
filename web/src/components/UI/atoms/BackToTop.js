import React, {useEffect, useState} from 'react'
import {ChevronUpIcon} from '@chakra-ui/icons'
import {Button} from '@chakra-ui/react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState()
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, behavior: 'smooth'
    })
  }

  const handleVisible = () => {
    setIsVisible(window.pageYOffset > 600 ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisible)
    return () => {
      window.removeEventListener('scroll', handleVisible)
    }
  }, [])

  return <React.Fragment>
    {isVisible && <Button
      colorScheme={'teal'}
      zIndex={1}
      borderRadius={'50%'}
      boxSize={'50px'}
      onClick={handleScrollToTop}>
      <ChevronUpIcon boxSize={'30px'} color={'white'}/>
    </Button>}
  </React.Fragment>
}

export default BackToTop
