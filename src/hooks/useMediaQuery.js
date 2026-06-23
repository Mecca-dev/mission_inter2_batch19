import { useMediaQuery} from 'react-responsive'

export const useIsMobile = () => useMediaQuery({ maxWidth: 767 })
export const useIsTablet = () => useMediaQuery({ minWidth: 768, maxWidth: 1023 })
export const useIsDesktop = () => useMediaQuery({ minWidth : 1024 })