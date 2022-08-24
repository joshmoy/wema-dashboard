import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.defaults.font.family = 'Inter'
ChartJS.defaults.font.weight = '500'

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      display: true,
      position: 'left' as const,
      beginAtZero: true,

      ticks: {
        color: '#ffffff',
        max: 1000,
        min: 0,
        stepSize: 200
      },
      grid: {
        borderColor: 'transparent',
        color: 'rgba(255,255, 255, 0.2)',
        borderDash: [6, 6],
        drawBorder: false
      }
    },
    x: {
      ticks: {
        color: '#fff'
      },
      grid: {
        display: false
      }
    }
  }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

const data = {
  labels,
  datasets: [
    {
      label: 'First dataset',
      data: [800, 600, 400, 950, 750],
      backgroundColor: '#fff',
      borderWidth: 0,
      borderRadius: 12,
      barThickness: 6
    }
  ]
}

const UsersChart = () => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      w={{ base: '100%', lg: '26.8rem' }}
      bg="linear-gradient(135deg, #990D81 0%, #861072 100%)"
      p="3rem 1.2rem 1.9rem 0.8rem"
      borderRadius="1.2rem">
      <Box minH="19rem">
        <Bar data={data} options={options} />
      </Box>
      <Box>
        <Text color="#FFFFFF" letterSpacing="-0.442553px" fontWeight={700} fontSize="1.6rem">
          New Users
        </Text>
        <Text color="#FFFFFF" letterSpacing="-0.387234px" fontSize="1.4rem">
          <Text
            as="span"
            color="#FFFFFF"
            letterSpacing="-0.387234px"
            fontWeight={700}
            fontSize="1.4rem">
            (+23%)
          </Text>{' '}
          than last week
        </Text>
      </Box>
    </Flex>
  )
}

export default UsersChart
