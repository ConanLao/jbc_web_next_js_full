// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LandingPage = () => {
  // Vars
  const mode = getServerMode()

  return <div>Products</div>
}

export default LandingPage