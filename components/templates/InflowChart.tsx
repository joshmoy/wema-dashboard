import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale)

ChartJS.defaults.font.family = 'Inter'

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {
    legend: {
      display: false
    }
  },

  elements: {
    point: {
      radius: 0
    },
    line: {
      tension: 0.5,
      borderWidth: 2
    }
  },
  scales: {
    y: {
      display: true,
      position: 'left' as const,
      beginAtZero: true,

      ticks: {
        stepSize: 25,
        color: '#B9B9B9'
      },
      grid: {
        borderColor: '#EEE',
        color: 'transparent'
      }
    },
    x: {
      ticks: {
        color: '#B9B9B9'
      },
      grid: {
        borderColor: 'transparent',
        color: '#eee'
      }
    }
  }
}

const labels = ['', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const data = {
  labels,
  datasets: [
    {
      label: 'First dataset',
      data: [20, 50, 20, 51, 54, 65, 40, 30],
      fill: true,
      borderColor: '#5F2EEA'
    },
    {
      label: 'Second dataset',
      data: [33, 25, 35, 35, 15, 80, 60, 50],
      fill: false,
      borderColor: '#4BDE97'
    }
  ]
}

const InflowChart = () => {
  return (
    <Box
      mb={{ base: '4rem', lg: 0 }}
      w={{ base: '100%', lg: '85rem' }}
      boxShadow="0px 0px 25px rgba(0, 0, 0, 0.06)"
      borderRadius="1rem"
      p={{ base: '1.9rem 2rem 2.2rem', lg: '1.9rem 0.95rem 2.2rem 2rem' }}
      bgColor="#fff">
      <Flex align="center" justify="space-between" mb="2.6rem">
        <Box>
          <Text
            color="#171717"
            letterSpacing="-0.4px"
            fontSize={{ base: '1.4rem', lg: '1.8rem' }}
            lineHeight="2.2rem"
            fontWeight={600}
            mb={{ base: '0.3rem', lg: '0.8rem' }}>
            User Inflow Statistics
          </Text>
          <Text color="#b9b9b9" letterSpacing="-0.5px" fontSize={{ base: '1.2rem', lg: '1.4rem' }}>
            Nov - July
          </Text>
        </Box>
        <Flex pr={{ lg: '4.05rem' }}>
          <Flex>
            <Box bgColor="#5F2EEA" boxSize="0.8rem" borderRadius="full" mr="0.8rem" mt="0.4rem" />
            <Box>
              <Text
                color="#B9B9B9"
                letterSpacing="0.3px"
                fontWeight="500"
                lineHeight="1.7rem"
                fontSize={{ base: '1.2rem', lg: '1.6rem' }}
                mb={{ base: '0.3rem', lg: '0.8rem' }}>
                AGENTS
              </Text>
              <Text
                color="#171717"
                letterSpacing="-0.4px"
                fontWeight="500"
                fontSize={{ base: '1.2rem', lg: '1.6rem' }}>
                475 273
              </Text>
            </Box>
          </Flex>
          <Flex ml={{ base: '1rem', lg: '3.8rem' }}>
            <Box bgColor="#4BDE97" boxSize="0.8rem" borderRadius="full" mr="0.8rem" mt="0.4rem" />
            <Box>
              <Text
                color="#B9B9B9"
                letterSpacing="0.3px"
                fontWeight="500"
                lineHeight="1.7rem"
                fontSize={{ base: '1.2rem', lg: '1.6rem' }}
                mb={{ base: '0.3rem', lg: '0.8rem' }}>
                USERS
              </Text>
              <Text
                color="#171717"
                letterSpacing="-0.4px"
                fontWeight="500"
                fontSize={{ base: '1.2rem', lg: '1.6rem' }}>
                782 396
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box h="19rem">
        <Line data={data} options={options} />
      </Box>
    </Box>
  )
}

export default InflowChart
