import { useMediaQuery } from 'react-responsive'

export const useMedia = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 600 })
  const isTablet = useMediaQuery({ maxWidth: 1000 })

  return {
    isMobile,
    isTablet,
  }
}
