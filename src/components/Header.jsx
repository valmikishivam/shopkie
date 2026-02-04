import { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';
import '../App.css'
const Header = () => {
 const [isNav,setIsNav]= useState(false);
 const [isSearch,setIsSearch]= useState(false);
 const [searchQuery,setSearchQuery]=useState('');
 
 const navigate=useNavigate()

 const handleSearch=(e)=>{
  if(e.key==="Enter"){
    if(searchQuery){
      navigate(`/search?query=${searchQuery}`)
    }
    setSearchQuery('')
    setIsSearch(false)
  }
 }
  return (
    <header>
      <div className='headerleft'>
      <i className='menuicon'onClick={()=>setIsNav(!isNav)}>{isNav?'✖':'☰'}</i>
      <h2 className='logo' onClick={()=>navigate('/')} style={{cursor:"pointer"}}>SHOPKIE</h2>
      </div>
      <input type='text' placeholder='search here' id='searchbar' className={isSearch?'searchbar searchactive':'searchbar'}
      value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onKeyDown={handleSearch}/>
      <nav className={isNav?"navlinks navactive":'navlinks'}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contract'>Contract</NavLink>
      </nav>
      <div className="navicons">

      <i className='searchicon'onClick={()=>setIsSearch(!isSearch)}>🔍︎</i>
      <i>🛒</i>
      <i>🙎🏻‍♂️</i>
      </div>
    </header>
  )
}
export default Header;