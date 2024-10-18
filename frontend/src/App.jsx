import {Outlet} from 'react-router-dom';
import Navigation from './pages/Auth/Navigation';


function App() {

  return (
    <>
      <div className="bg-[#180115] text-white min-h-screen"> 
        <Butt
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
