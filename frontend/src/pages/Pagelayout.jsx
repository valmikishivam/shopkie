
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
function Pagelayout() {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col  '>
      <Navbar />
      <main className='flex-1 h-full w-full p-2'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Pagelayout