import React, { FC } from 'react'
import {
  Box,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input
} from '@chakra-ui/react'
import { headerChevron, lightIcon, notificationIcon, searchIcon } from '@components/svg'
import { useState } from 'react'
import { MobileProps } from '@components/layout/Sidebar'

const HeaderSearch: FC<MobileProps> = ({ isMobile }) => {
  const languages = ['en', 'fr', 'es', 'de']
  const [defaultLanguage, setDefaultLanguage] = useState('en')
  return (
    <Flex align="center" flexWrap="wrap" display={{ base: isMobile ? 'flex' : 'none', lg: 'flex' }}>
      <Flex
        mr={{ base: 0, lg: '5.1rem' }}
        w={{ base: 'full', lg: '27.1rem' }}
        h="4rem"
        mb={{ base: '1rem', lg: 0 }}
        bgColor="#FAFAFA"
        borderRadius="6px"
        pl="1.1rem"
        align="center">
        <Box mr="1rem">{searchIcon}</Box>
        <Input
          variant="unstyled"
          placeholder="Enter keywords ..."
          fontSize="1.4rem"
          _placeholder={{ color: ' #D6D7E3' }}
        />
      </Flex>
      <Box mr="2.1rem">
        <Menu>
          <MenuButton as={'button'}>
            <Flex align="center" cursor="pointer">
              <Text
                mr="1rem"
                color={isMobile ? '#fff' : '#767676'}
                fontSize="1.6rem"
                fontWeight="500"
                textTransform="uppercase">
                {defaultLanguage}
              </Text>
              <Box>{headerChevron}</Box>
            </Flex>
          </MenuButton>
          <MenuList p="2rem 1rem">
            {languages?.map((language, id) => (
              <MenuItem
                key={id}
                h="3rem"
                cursor="pointer"
                bgColor="#fff"
                onClick={() => setDefaultLanguage(language)}
                textTransform="uppercase"
                borderRadius="8px"
                _hover={{ bgColor: 'rgba(153, 13, 129,0.1)' }}>
                {language}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Flex
        bg=" #FAFAFA"
        mr="1.5rem"
        cursor="pointer"
        align="center"
        justify="center"
        boxSize="4rem"
        borderRadius="full">
        <Box>{lightIcon}</Box>
      </Flex>
      <Flex
        bg=" #FAFAFA"
        mr="1.7rem"
        cursor="pointer"
        align="center"
        justify="center"
        position="relative"
        boxSize="4rem"
        borderRadius="full">
        <Box>{notificationIcon}</Box>
        <Box
          position="absolute"
          boxSize="0.9rem"
          bgColor="#F26464"
          border="1px solid #FFFFFF"
          top="0.8rem"
          right="1rem"
          borderRadius="full"
        />
      </Flex>
      <Image
        h="3.6rem"
        w="3.6rem"
        borderRadius="full"
        objectFit="cover"
        src="/images/support.png"
      />
    </Flex>
  )
}

export default HeaderSearch
