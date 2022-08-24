import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { hamburger } from '@components/svg'
import Sidebar from '@components/layout/Sidebar'
import HeaderSearch from './HeaderSearch'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box h="8rem" pos="fixed" bgColor="#fff" w={{ base: '100vw', lg: 'calc(100vw - 25.3rem)' }}>
      <Flex
        w={{ base: '90%', lg: 'full' }}
        m={{ base: '0 auto', lg: 0 }}
        h="full"
        align="center"
        pl={{ base: 0, lg: '2rem' }}
        pr={{ base: 0, lg: '2.5rem' }}
        justify="space-between">
        <Text color="#171717" letterSpacing="1px" fontSize="2.4rem" fontWeight="700">
          Dashboard
        </Text>
        <HeaderSearch />
        <Button
          display={{ base: 'inline-flex', lg: 'none' }}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          onClick={onOpen}
          p="0">
          {hamburger}
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="">
        <DrawerOverlay />
        <DrawerContent pl="1.4rem" pr="1.3rem" bg="brand.main">
          <DrawerCloseButton zIndex={500} />

          <DrawerBody p="0">
            <Sidebar isMobile />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header
