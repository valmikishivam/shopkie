import ProductCard from '../components/ProductCard.jsx';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Loader } from 'lucide-react'
const baseurl = import.meta.env.VITE_BACKEND_URL;

const ShopPage = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${baseurl}/shopkie/products?page=${page}`);

      setProductData(res.data.products)
      if (page == res.data.totalPage) {
        setHasMore(false);
      }else{
        setHasMore(true)
      }
      
    } catch (error) {
      console.log(error);
      setHasMore(false)
    } finally { setLoading(false) }
  }
  useEffect(() => {
    getPosts()
    window.scrollTo({top:0,behavior:'smooth'})
  }, [page])

  const nextPage=()=>{
    setPage((prev)=>prev+1);
  }
  const prevPage=()=>{
    setPage((prev)=>Math.max(1,prev-1));
  }

  return (
    <div className='w-full'>
      <h1 className='text-purple-600 font-bold text-2xl text-center p-2'> All <span className='text-red-600 border-b-2 border-b-purple-700'>Products</span></h1>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          productData && productData.length > 0 ? productData.map(pro => (
            <ProductCard data={pro} key={pro.uid} />
          )) : (
            <div className='col-span-2 md:col-span-3 lg:col-span-4'>
              <h1 className='text-center text-xl'>No products found</h1>
            </div>
          )
        }
      </section>
      <div className='w-full p-3 flex justify-center items-center'>
        {
          loading && <Loader size={30} className='animate-spin' />
        }
      </div>

        
        <div className={loading?'hidden':'flex justify-center items-center gap-x-5 p-2'}>
        <button className='bg-purple-600 text-white px-3 py-1 disabled:bg-gray-200'
         onClick={prevPage} disabled={page<2}>prevPage</button>
         <span>{page}</span>
        <button className='bg-purple-600 text-white px-3 py-1 disabled:bg-gray-200'
         onClick={nextPage} disabled={!hasMore}>NextPage</button>
      </div>
    </div>
  )
}

export default ShopPage