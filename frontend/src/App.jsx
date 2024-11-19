import {Outlet} from 'react-router-dom';
import Navigation from './pages/Auth/Navigation';


function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-[#1B0140] via-[#36072a] to-[#1D0259] text-white min-h-screen"> 
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
