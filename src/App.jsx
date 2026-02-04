
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContractPage from './pages/ContractPage.jsx'
import SproductPage from './pages/SproductPage.jsx';
import SearchPage from './pages/SearchPage.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/search'element={<SearchPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contract' element={<ContractPage/>}/>
        <Route path='/product/:id' element={<SproductPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
