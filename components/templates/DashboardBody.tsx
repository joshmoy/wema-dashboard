import { Box } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import Charts from './Charts'
import RecentRequests from './RecentRequests'

const DashboardBody = () => {
  return (
    <Box maxW={{ base: '90%', lg: '118.7rem' }} m="0 auto" p={{ lg: '3.9rem 2.7rem 5rem 2.1rem' }}>
      <Cards />
      <Charts />
      <RecentRequests />
    </Box>
  )
}

export default DashboardBody
