import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { logo, sidebarChevron } from '@components/svg'
import HeaderSearch from '@components/templates/HeaderSearch'
import { sidebarData } from 'data/sidebarData'
import React, { FC } from 'react'

export type MobileProps = {
  isMobile?: boolean
}
const Sidebar: FC<MobileProps> = ({ isMobile }) => {
  return (
    <Box h="100vh" pos="fixed" top="0" w={isMobile ? 'calc(100vw - 2.7rem)' : '22.6rem'}>
      <Flex direction="column" justify="space-between" h="full">
        <Box>
          <Flex
            m="3rem auto 2.6rem"
            justify="center"
            w="full"
            p="0 0.7rem 1.1rem 0.6rem"
            borderBottom="1px solid rgba(255,255,255,0.1)">
            {logo}
          </Flex>
          <Box>
            {sidebarData?.map((data, id) => (
              <Flex
                key={id}
                h="3.6rem"
                _notFirst={{ mt: '2.6rem' }}
                pl="0.85rem"
                align="center"
                justify="space-between"
                borderRadius="0.5rem"
                transition="0.7s"
                cursor="pointer"
                _hover={{
                  bg: 'rgba(255,255,255,0.1)',
                  transition: '0.7s',
                  transform: 'translateX(0.5rem)'
                }}
                bg={data?.isActive ? 'rgba(255,255,255,0.1)' : 'transparent'}>
                <Flex align="center" h="full">
                  <Box mr="1.25rem">{data?.icon}</Box>
                  <Text
                    fontWeight={500}
                    color="#fff"
                    opacity={data?.isActive ? 1 : 0.6}
                    fontSize="1.4rem">
                    {data?.label}
                  </Text>
                </Flex>
                {data?.isDropdown ? (
                  <Box>{sidebarChevron}</Box>
                ) : (
                  <Box
                    h="full"
                    w="0.3rem"
                    borderRadius="0px 10px 10px 0px"
                    bgColor="#fff"
                    display={data?.isActive ? 'block' : 'none'}
                  />
                )}
              </Flex>
            ))}
          </Box>
        </Box>
        <Box display={{ base: 'block', lg: 'none' }}>
          <HeaderSearch isMobile />
        </Box>
        <Flex
          h="6.8rem"
          m="0 0.7rem 5rem 0.6rem"
          w={{ base: 'full', lg: '21.3rem' }}
          pl="1rem"
          align="center"
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="1rem">
          <Box boxSize="4.8rem" borderRadius="full">
            <Image
              src="/images/support.png"
              boxSize="4.8rem"
              borderRadius="full"
              objectFit="cover"
            />
          </Box>
          <Box ml="0.8rem">
            <Text color="#fff" letterSpacing="0.75px" fontWeight={600} lineHeight="1rem">
              Nafisa Sh.
            </Text>
            <Text
              letterSpacing="0.85px"
              color="rgba(255, 255, 255, 0.5)"
              fontSize="1rem"
              fontWeight="500">
              Support manager
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Sidebar
