import { Box, Grid, GridItem } from '@chakra-ui/react'
import DashboardBody from '@components/templates/DashboardBody'
import Header from '@components/templates/Header'
import React from 'react'

const MainContent = () => {
  return (
    <Box minH="100vh" bg="#FAFAFA">
      <Grid minH="100vh" gridTemplateRows={'8rem 1fr'} spacing={0}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem>
          <DashboardBody />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MainContent
