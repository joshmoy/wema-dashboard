import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Image,
  TableContainer
} from '@chakra-ui/react'
import { tableChevron } from '@components/svg'
import { tableData } from 'data/dashboardData/tableData'
import React from 'react'

const RecentRequests = () => {
  return (
    <Box
      w={{ base: '100%', lg: '84.9rem' }}
      m={{ base: '0 auto 4rem', lg: 0 }}
      boxShadow="0px 20px 27px rgba(0, 0, 0, 0.05)"
      borderRadius="1.2rem"
      pt="2.7rem"
      bg="#fff">
      <Text m="0 0 2.9rem 2.4rem" color="#141414" fontSize="1.8rem" fontWeight={600}>
        Recent Requests
      </Text>
      <Box w="100%" overflowX="scroll">
        <TableContainer w="100vw">
          <Table variant="simple" size="lg">
            <Thead>
              <Tr>
                <Th
                  color="#8392AB"
                  fontSize="1.4rem"
                  fontWeight={700}
                  textTransform="capitalize"
                  letterSpacing="-0.38px">
                  Name/Email
                </Th>
                <Th
                  color="#8392AB"
                  fontSize="1.4rem"
                  fontWeight={700}
                  textTransform="capitalize"
                  letterSpacing="-0.38px">
                  Type
                </Th>
                <Th
                  color="#8392AB"
                  fontSize="1.4rem"
                  fontWeight={700}
                  textTransform="capitalize"
                  letterSpacing="-0.38px">
                  Status
                </Th>
                <Th
                  color="#8392AB"
                  fontSize="1.4rem"
                  fontWeight={700}
                  textTransform="capitalize"
                  letterSpacing="-0.38px">
                  Date
                </Th>
                <Th
                  color="#8392AB"
                  fontSize="1.4rem"
                  fontWeight={700}
                  textTransform="capitalize"
                  letterSpacing="-0.38px"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData?.map((data, id) => (
                <Tr
                  h="7.2rem"
                  transition="0.5s"
                  key={id}
                  _hover={{ bgColor: 'rgba(153, 13, 129,0.05)', transition: '0.7s' }}>
                  <Td>
                    <Flex align="center">
                      <Box mr="1.9rem">
                        <Image src={data?.image} boxSize="3.6rem" objectFit="contain" />
                      </Box>
                      <Box w="calc(100% - 5.5rem)">
                        <Text
                          color="#141414"
                          fontSize="1.6rem"
                          fontWeight={600}
                          letterSpacing="-0.442553px"
                          lineHeight="2.2rem">
                          {data?.name}
                        </Text>
                        <Text
                          color="#8392AB"
                          fontSize="1.4rem"
                          letterSpacing="-0.387234px"
                          lineHeight="1.9rem">
                          {data?.email}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td
                    color="#8392AB"
                    fontSize="1.4rem"
                    letterSpacing="-0.387234px"
                    lineHeight="1.9rem">
                    {data?.type}
                  </Td>
                  <Td>
                    <Flex
                      w="6.6rem"
                      h="2.2rem"
                      align="center"
                      borderRadius="10rem"
                      justify="center"
                      bgColor={
                        data?.status === 'Pending'
                          ? 'rgba(255, 172, 50, 0.1)'
                          : 'rgba(99, 182, 127, 0.1)'
                      }>
                      <Text
                        color={data?.status === 'Pending' ? '#FFB648' : '#63B67F'}
                        fontSize="1.2rem"
                        fontWeight={500}>
                        {data?.status}
                      </Text>
                    </Flex>
                  </Td>
                  <Td
                    color={data?.dateColor}
                    fontSize="1.4rem"
                    letterSpacing="-0.387234px"
                    lineHeight="1.9rem">
                    {data?.date}
                  </Td>
                  <Td>
                    <Flex
                      align="center"
                      justify="center"
                      boxSize="2.5rem"
                      borderRadius="full"
                      opacity="0.4"
                      cursor="pointer"
                      bgColor="rgba(80, 159, 239, 0.5)">
                      {tableChevron}
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default RecentRequests
