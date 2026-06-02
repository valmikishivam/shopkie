import { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react'; // Uses lucide-react for clean icons
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/Cart.jsx'
const Navbar = () => {
    const {item} = useCart()
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const [searchQuery,setSearchQuery] =useState('');
    return (
        <nav className="relative text-black px-2 py-2 md:px-4 shadow-md">
            <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">

                {/* 1. Logo */}
                <div className="text-xl  lg:text-2xl font-bold tracking-wider shrink-0 cursor-pointer" onClick={()=>navigate('/')}>
                    SHOP<span className="text-purple-600">KIE</span>
                </div>

                {/* 2. Searchbar (Desktop) */}
                <div className="hidden md:flex flex-1 max-w-md relative items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onKeyDown={(e)=>e.key==='Enter'?navigate(`/search?q=${searchQuery}`):null}
                        className="w-full text-sm  pl-4 pr-10 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <Search className="absolute right-3 w-4 h-4 text-gray-400" onClick={()=>navigate(`/search?q=${searchQuery}`)} />
                </div>

                {/* 3. Navlinks (Desktop) */}
                <div className="hidden lg:flex items-center gap-6 font-medium text-gray-300">
                    <NavLink to="/"

                        className={({ isActive }) => isActive ? "text-purple-500 border-b-2 border-b-purple-600" : "text-black"}>Home</NavLink>
                    <NavLink to="/shop"

                        className={({ isActive }) => isActive ? "text-purple-500 border-b-2 border-b-purple-600" : "text-black"}>Shop</NavLink>
                    <NavLink to="/about"

                        className={({ isActive }) => isActive ? "text-purple-500 border-b-2 border-b-purple-600" : "text-black"}>about</NavLink>
                    <NavLink to="/contact"

                        className={({ isActive }) => isActive ? "text-purple-500 border-b-2 border-b-purple-600" : "text-black"}>contact</NavLink>
                </div>

                {/* 4. Menu & Cart Icons */}
                <div className="flex items-center gap-4">
                    {/* Cart Icon */}
                    <button className="relative p-2 hover:bg-purple-800 hover:text-white rounded-full transition-colors" aria-label="Cart" onClick={()=>navigate('/cart')}>
                        <ShoppingCart className="w-6 h-6"/>
                        <span className="absolute top-0 right-0 bg-purple-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center scale-75 transform translate-x-1 -translate-y-1">
                            {item.length}
                        </span>
                    </button>

                    {/* Hamburger Menu Icon (Mobile Only) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-purple-500 hover:bg-purple-600
                        hover:text-white rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Searchbar (Visible only under medium screens) */}
            <div className="mt-3 md:hidden relative flex items-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onKeyDown={(e)=>e.key==='Enter'?navigate(`/search?q=${searchQuery}`):null}
                    className=" flex-1 w-ful text-sm pl-4 pr-10 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute right-3 w-4 h-4 text-gray-400" onClick={()=>navigate(`/search?q=${searchQuery}`)}/>
            </div>

            {/* Mobile Drawer Slide-out Menu (Toggled by State) */}
            <div className={`
        fixed top-[116px] md:top-[68px] left-0 w-full bg-purple-600 border-t border-slate-800 p-6 z-50 transition-all duration-300 ease-in-out lg:hidden
        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
      `}>
                <div className="flex flex-col gap-4 font-semibold text-lg text-gray-200">
                    <Link to="/" className="hover:text-white py-2 border-b " onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/shop" className="hover:text-white py-2 border-b " onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" className="hover:text-white py-2 border-b " onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="hover:text-white py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar