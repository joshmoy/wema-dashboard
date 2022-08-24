import {
  dashboardIcon,
  kycIcon,
  reportsIcon,
  requestIcon,
  settingsIcon,
  usersIcon
} from '@components/svg'

export const sidebarData = [
  { label: 'Dashboard', icon: dashboardIcon, isActive: true, isDropdown: false },
  { label: 'Requests', icon: requestIcon, isActive: false, isDropdown: false },
  { label: 'KYCs', icon: kycIcon, isActive: false, isDropdown: false },
  { label: 'Reports', icon: reportsIcon, isActive: false, isDropdown: false },
  { label: 'Audit Trail', icon: dashboardIcon, isActive: false, isDropdown: true },
  { label: 'Users', icon: usersIcon, isActive: false, isDropdown: false },
  { label: 'Settings', icon: settingsIcon, isActive: false, isDropdown: false }
]
