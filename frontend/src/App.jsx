import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { ThemeProvider } from './components/ThemeProvider';


function App() {

  return (
    <>
<<<<<<< HEAD
      <div className="bg-gradient-to-b from-[#1B0140] via-[#36072a] to-[#1D0259] text-white min-h-screen"> 
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
=======
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider >
          <AppSidebar />
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </ThemeProvider>
>>>>>>> 43caa06801afec264c898e5c33c10d0cd9aaf417
    </>
  )
}

export default App
