import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx';
import { Loader, MoveLeft } from 'lucide-react';
const baseurl = import.meta.env.VITE_BACKEND_URL
import axios from 'axios';

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const category = searchParams.get('category')
  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${baseurl}/shopkie/search?${query?`q=${query}`:`category=${category}` }`);
      
      setProducts(res.data.products)
      
    } catch (error) {
      console.log(error);
      
    } finally { setLoading(false) }
  }
  useEffect(() => {
    getProducts()
    window.scrollTo({top:0,behavior:'smooth'})
  }, [query, category])

 
  return (
    <div className='w-full'>
      <h1 className='text-2xl lg:3xl text-purple-600 p-2 text-center'>Search results</h1>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          products && products.length > 0 ? products.map(pro => (
            <ProductCard data={pro} key={pro.uid} />
          )) : (
            <div className='w-full h-full col-span-2 md:col-span-3 lg:col-span-4'>
              <h1 className='text-center text-xl'>No products found</h1>
              <div className='p-3 flex justify-center items-center'>
                <Link to={'/'} className='flex justify-center items-center gap-x-2 text-purple-500'><span className='bg-purple-600 text-white p-2 rounded-md'><MoveLeft/></span>Back</Link>
              </div>
            </div>
          )
        }
      </section>

      <div className='w-full p-3 flex justify-center items-center'>
        {
          loading&&<Loader size={30} className='animate-spin' />
        }
      </div>
    </div>
  )
}

export default SearchPage