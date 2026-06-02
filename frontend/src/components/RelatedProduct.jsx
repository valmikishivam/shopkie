import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

const RelatedProduct = ({ category }) => {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const reletedData = async () => {

      try {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/shopkie/related?category=${category}`);
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    reletedData()
  }, [category])
  return (
    <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {
        data ?data.map(pro => (
          <ProductCard data={pro} key={pro.uid} />
        )):loading?(
          <div className='col-span-3 md:col-span-4 lg:col-span-6 place-items-center'>
         <Loader size={30} className='animate-spin' />
          </div>
        ):(<h1>no products</h1>)
      }
    </div>
  )
}

export default RelatedProduct
