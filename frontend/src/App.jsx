import AboutPage from './pages/AboutPage.jsx'
import CartPage from './pages/CartPage.jsx'
import Contact from './pages/Contact.jsx'
import HomePage from './pages/HomePage.jsx'
import InvalidPage from './pages/PageNotFound.jsx'
import ShopPage from './pages/ShopPage.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import { Route, Routes } from 'react-router-dom'
import Pagelayout from './pages/Pagelayout.jsx'
import SearchPage from './pages/SearchPage.jsx'
function App() {


  return (
    <>
      <Routes>
        <Route path='*' element={<InvalidPage />} />
       <Route element={<Pagelayout/>}>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/shop'element={<ShopPage/>}/>
        <Route path='/about'element={<AboutPage/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/shop/:id'element={<SingleProduct/>}/>
        <Route path='/search' element={<SearchPage/>}/>
       </Route>
       <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}

export default App
