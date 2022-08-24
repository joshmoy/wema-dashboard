import { Box, Flex, Text } from '@chakra-ui/react'
import { cardData } from 'data/dashboardData/cardData'
import React from 'react'

const Cards = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      mt={{ base: '4rem', lg: '0' }}
      mb="4rem"
      direction={{ base: 'column', lg: 'row' }}>
      {cardData?.map((data, id) => (
        <Flex
          key={id}
          mb={{ base: '2rem', lg: 0 }}
          w={{ base: 'full', lg: '27rem' }}
          minH="12.3rem"
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.06)"
          borderRadius="1rem"
          transition=".7s"
          cursor="pointer"
          _hover={{ transform: 'scale(1.05)', transition: '.5s' }}
          p="1.6rem 3.4rem 1.7rem 1.9rem"
          bgColor="#fff">
          <Flex
            mr="9px"
            boxSize="6rem"
            borderRadius="full"
            bgColor={data?.bgColor}
            align="center"
            justify="center">
            {data?.icon}
          </Flex>
          <Box pt="6px" w="calc(100% - 6.9rem)">
            <Text fontSize="2.4rem" fontWeight="600" color="#171717" mb="1px">
              {data?.amount}
            </Text>
            <Text fontSize="1.6rem" color="#AAAAAA" mb="1.8rem">
              {data?.label}
            </Text>
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Box mr="5.6px">{data?.percentageIcon}</Box>
                <Text color=" #4BDE97">{data?.percentage}</Text>
              </Flex>
              <Text color="#BDBDBD">Last month</Text>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default Cards
