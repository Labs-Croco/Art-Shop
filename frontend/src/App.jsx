import {Outlet} from 'react-router-dom';
import Navigation from './pages/Auth/Navigation';


function App() {

  return (
    <>
      <div>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
