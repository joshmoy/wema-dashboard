import { Flex } from '@chakra-ui/react'
import React from 'react'
import InflowChart from './InflowChart'
import UsersChart from './UsersChart'

const Charts = () => {
  return (
    <Flex justify="space-between" mb="2.7rem" direction={{ base: 'column', lg: 'row' }}>
      <InflowChart />
      <UsersChart />
    </Flex>
  )
}

export default Charts
