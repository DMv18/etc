import Routes from '@routes/routes.jsx'
import useAdjustContent from '@hooks/useWindowSize/useAdjustContent.jsx'

function App() {

  useAdjustContent('main');

  return (
    <Routes />
  )
}

export default App;