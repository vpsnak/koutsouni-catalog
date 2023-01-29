import React from 'react'
import {ListItem, Text, UnorderedList, VStack} from '@chakra-ui/react'
import {Link} from 'react-scroll'

const CategoryList = ({categories}) =>
  <VStack display="flex"
          align="flex-start"
          maxW={'240px'}
          width={'100%'}
          pt={'20px'}>
    <Text fontSize={'16px'}
          fontWeight={'700'}
          lineHeight={'23px'}
          mb={'1.2px'}>Κατηγορίες</Text>
    <UnorderedList styleType={'none'}
                   mt={0}>
      {categories && categories.map(category => {
        return (
          <ListItem fontSize={16}
                    fontWeight={400}
                    lineHeight={'23px'}
                    m={'8px 0'}>
            <Link data-to-scrollspy-id={category.title}
                  smooth={true}
                  to={category.title}>
              <Text cursor={'pointer'}>
                {category.title}
              </Text>
            </Link>
          </ListItem>
        )
      })}
    </UnorderedList>
  </VStack>

export default CategoryList