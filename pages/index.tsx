import React, { ReactChild } from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Sidebar from '@components/layout/Sidebar'
import MainContent from '@components/layout/MainContent'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
        <link rel="icon" href="logo.ico" />
      </Head>

      <Grid minH="100vh" gridTemplateColumns={{ base: '1fr', lg: '25.3rem 1fr' }} spacing={0}>
        <GridItem pl="1.4rem" pr="1.3rem" bg="brand.main" display={{ base: 'none', lg: 'block' }}>
          <Sidebar />
        </GridItem>
        <GridItem>
          <MainContent />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home
