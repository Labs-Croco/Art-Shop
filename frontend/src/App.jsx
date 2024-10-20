import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';


function App() {

  return (
    <>
      <SidebarProvider >
        <AppSidebar />
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
      </SidebarProvider>
    </>
  )
}

export default App
