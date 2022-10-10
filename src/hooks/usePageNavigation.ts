import { useNavigate } from 'react-router-dom'
import { selectCurrentLocation } from '../store/location/selectors'
import { useAppSelector } from './redux'

export const usePageNavigation = () => {
  const location = useAppSelector(selectCurrentLocation)
  const navigate = useNavigate()

  const navigateToWelcomePage = () => {
    navigate('/')
  }

  const navigateToHomePage = () => {
    navigate('/' + location?.name.toLowerCase())
  }

  const navigateToDetailPage = () => {
    navigate('/' + location?.name.toLowerCase() + '/details')
  }

  return {
    navigateToWelcomePage,
    navigateToHomePage,
    navigateToDetailPage,
  }
}
