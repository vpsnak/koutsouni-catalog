import React from 'react'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

const SearchInput = ({
                       onChange = () => {
                       }
                     }) => {
  const handleInputChange = (e) => onChange(e.target.value)
  return <InputGroup pos="relative">
    <InputRightElement
      pointerEvents="none"/>
    <SearchIcon pos="absolute"
                boxSize={'20px'}
                top={'12px'}
                left={'13px'}
                color={'lightslategrey'}/>
    <Input p="12px 24px"
           pl={'40px'}
           height={'45px'}
           width="100%"
           fontSize={20}
           mb="10px"
           borderRadius="5px"
           placeholder="Αναζήτηση"
           onChange={handleInputChange}/>
  </InputGroup>
}

export default SearchInput