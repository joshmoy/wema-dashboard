import {
  approvedRequestsIcon,
  arrowDown,
  arrowUp,
  orangeArrowUp,
  pendingRequestsIcon,
  totalAgentsIcon,
  totalUsersIcon
} from '@components/svg'

export const cardData = [
  {
    amount: '1478 286',
    label: 'Pending Requests',
    percentage: '4.07%',
    bgColor: 'rgba(47, 73, 209, 0.1)',
    icon: pendingRequestsIcon,
    percentageIcon: arrowUp
  },
  {
    amount: '478 520',
    label: 'Approved Requests',
    percentage: '0.24%',
    bgColor: 'rgba(255, 182, 72, 0.1)',
    icon: approvedRequestsIcon,
    percentageIcon: arrowUp
  },
  {
    amount: '154 872',
    label: 'Total Agents',
    percentage: '1.64%',
    bgColor: 'rgba(95, 46, 2034, 0.1)',
    icon: totalAgentsIcon,
    percentageIcon: arrowDown
  },
  {
    amount: '167',
    label: 'Total Users',
    percentage: '0.00%',
    bgColor: 'rgba(75, 222, 141, 0.1)',
    icon: totalUsersIcon,
    percentageIcon: orangeArrowUp
  }
]
