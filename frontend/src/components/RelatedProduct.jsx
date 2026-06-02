import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx'

const RelatedProduct = ({ category }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const reletedData = async () => {

      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/shopkie/related?category=${category}`);
        setData(res.data.products);

      } catch (error) {
        console.log(error);
      }
    }
    reletedData()
  }, [category])
  return (
    <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {
        data && data.map(pro => (
          <ProductCard data={pro} key={pro.uid} />
        ))
      }
    </div>
  )
}

export default RelatedProduct