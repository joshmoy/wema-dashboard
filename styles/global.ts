export default {
  global: {
    html: {
      fontSize: '62.5%'
    },
    body: {
      bg: '#fff',
      fontSize: '1.4rem',
      fontFamily: 'Inter, sans-serif'
    },
    a: {
      _hover: {
        textDecoration: 'none'
      }
    },
    '@keyframes blinker': {
      from: { opacity: '1.0' },
      to: { opacity: '0.0' }
    },
    '.chakra-switch__track': {
      _focus: {
        boxShadow: 'none !important'
      }
    },
    '.toastContainer': {
      zIndex: '1550 !important'
    },
    '.toast.success': {
      backgroundColor: 'rgba(40,51,65,1) !important'
    }
  }
}
